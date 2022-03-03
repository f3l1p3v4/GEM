import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Report from "./pages/Report";
import ReportChurch from "./pages/ReportChurch";
import Moodle from "./pages/Moodle";
import Class from "./pages/Class";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/relatorios" component={Report} />
            <Route path="/relatorio/:igreja" component={ReportChurch} />
            <Route path="/moodle" component={Moodle} />
            <Route path="/aulas" component={Class} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
