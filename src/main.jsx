import React from "react";
import ReactDOM from "react-dom/client";
import App from "./question1/App";
import App2 from "./question2/App2";
import App3 from "./question3/App3";
import App4 from "./question4/App4";
import App5 from "./question5/App5";
import App6 from "./question6/App6";


import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <App2/>
    <App3/>
    <App4/>
    <App5/>
    <App6/>
  </React.StrictMode>
);
