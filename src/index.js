import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const addition = function (arg1, arg2) {
  return arg1 + arg2;
};
addition();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
