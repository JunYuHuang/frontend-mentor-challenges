import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Header from "./common/Header";
import history from "./history";

function App() {
  // state & vars
  const [countriesList, setCountriesList] = useState([]);
  const [country, setCountry] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const errorMessage = "not applicable";

  // api call for country list for home page
  useEffect(() => {
    const API_URL =
      "https://restcountries.eu/rest/v2/all?fields=alpha3Code;flag;name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;";

    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        setCountriesList(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="main-wrapper">
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <HomePage
                errorMessage={errorMessage}
                countries={countriesList}
                setCurrentCountry={setCountry}
              />
            </Route>
            <Route exact path="/country/:id">
              <DetailPage
                errorMessage={errorMessage}
                currentCountry={country}
                setCurrentCountry={setCountry}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
