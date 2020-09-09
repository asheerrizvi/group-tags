import React from "react";
import ReactDOM from "react-dom";
import "@atlaskit/css-reset";
import App from "./App";
import data from "./data/demodata";

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
