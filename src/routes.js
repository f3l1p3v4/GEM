import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

//import Home from "./pages/Home";
import ReportPage from "./pages/ReportPage";
import ChurchPage from "./pages/ChurchPage";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="main_container">
          <Switch>
            <Route path="/" exact component={ReportPage} />
            {/*<Route path="/relatorio" component={ReportPage} />*/}
            <Route
              name="informacoes"
              path="/informacoes/:church"
              component={ChurchPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
