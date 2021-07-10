import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

import ReportPage from "./pages/ReportPage";
import ChurchPage from "./pages/ChurchPage";
import ContactPage from "./pages/ContactPage";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="main_container">
          <Switch>
            <Route path="/" exact component={ReportPage} />
            <Route
              name="informacoes"
              path="/informacoes/:church"
              component={ChurchPage}
            />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
