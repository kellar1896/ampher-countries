import { Country } from "../types";

export const HttpClient = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const body = await response.json() as Country[]
  console.log(body);
  return body
};
