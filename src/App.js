import React from "react";

import Routes from "./routes";

import "./global.css";

function App() {
  return (
    <div>
      <p className="warnings">
        Importante! Horários de culto podem estar diferentes por conta da
        pandemia.
      </p>
      <Routes />
    </div>
  );
}

export default App;
