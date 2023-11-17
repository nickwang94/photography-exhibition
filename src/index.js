import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import "./i18n";

const App = () => (
  <div className="App">
    <Home />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
