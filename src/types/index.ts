export type Currency = {
    [key: string]: {
        name: string;
        symbol: string;
    };
}

export type CountryName = {
    common: string;
    official: string;
}

export type Country = {
    altSpellings: string[];
    capital: string[];
    currencies:  Currency;
    name: CountryName;
    region: string;
    flag: string;
} 