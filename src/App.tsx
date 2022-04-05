import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/organism/header";
import CountriesTable from "./components/organism/countriesTable";
import { Country } from "./types";
import MainTemplate from "./components/templates/mainTemplate";
import CountryRepository from "./repositories/countries.Repository";

const App = () => {
  const [countries, setCountries] = useState([] as Country[]);
  const instanceCountries = CountryRepository.getInstance();

  useEffect(() => {
    const getCountries = async () => {
      setCountries(instanceCountries.filterCountries);
    };
    instanceCountries.addSubscription(()=>{getCountries()});
    instanceCountries.getCountries();
  }, []);
  return (
    <div className="App">
      <MainTemplate
        header={<Header />}
        table={<CountriesTable countries={countries} />}
      />
    </div>
  );
};

export default App;
