import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Header from "./common/Header";
import history from "./history";

function App() {
  return (
    <div className="main-wrapper">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/countries/:id" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
