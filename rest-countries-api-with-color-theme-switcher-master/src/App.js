import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Header from "./common/Header";
import history from "./history";

function App() {
  // state
  const [countriesList, setCountriesList] = useState([]);
  const [country, setCountry] = useState([]);
  const [countryNameFilterTerm, setCountryNameFilterTerm] = useState("");
  const [countryRegionFilterTerm, setCountryRegionFilterTerm] = useState("");

  // global consts and vars
  const BASE_API_URL = "https://restcountries.eu/rest/v2";
  const HOME_PAGE_API_URL =
    BASE_API_URL + "/all?fields=alpha3Code;flag;name;population;region;capital";
  const DETAIL_PAGE_API_URL =
    BASE_API_URL +
    "/all?fields=alpha3Code;flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;";

  // api call for country list for home page
  useEffect(() => {
    fetch(HOME_PAGE_API_URL)
      .then(res => res.json())
      .then(res => {
        setCountriesList(res);
        console.log(countriesList);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="main-wrapper">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage countries={countriesList} />
          </Route>
          <Route exact path="/countries/:id">
            <DetailPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
