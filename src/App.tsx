import React, { useEffect } from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import { HttpClient } from "./plugins/httpClient";
import Header from "./components/organism/header";
import CountriesTable from "./components/organism/countriesTable";
// import Example from "./views/example";

const App = () => {
  useEffect(() => {
    HttpClient();
  }, []);
  return (
    <div className="App">
      {/* <Example /> */}
      <Header />
      <CountriesTable />
    </div>
  );
};

export default App;
