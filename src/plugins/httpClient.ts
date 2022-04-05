export const HttpClient = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const body = await response.json()
  console.log(body);
};
