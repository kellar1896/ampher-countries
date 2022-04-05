import EventManager from "../plugins/eventManager";
import { HttpClient } from "../plugins/httpClient";
import { Country } from "../types";

export default class CountryRepository extends EventManager {
  public static _instance: CountryRepository;

  private _countries: Country[] = [];
  private _filterCountries: Country[] = [];

  public get filterCountries(): Country[] {
    return [...this.filterCountries];
  }

  public get countries(): Country[] {
    return [...this._countries];
  }

  public async getCountries(): Promise<void> {
    const countriesData = await HttpClient();
    this._countries = countriesData;
    this._filterCountries = countriesData;
    this.notifySubscriptions();
  }

  public removeCountry(country: Country): void {
    this._filterCountries = this._filterCountries.filter(
      (c) => c.name.common !== country.name.common
    );
    this.notifySubscriptions();
  }

  public resetCountryData(): void {
    this._filterCountries = this._countries;
    this.notifySubscriptions();
  }

  public static getInstance(): CountryRepository {
    if (!CountryRepository._instance) {
      CountryRepository._instance = new CountryRepository();
    }
    return CountryRepository._instance;
  }
}
