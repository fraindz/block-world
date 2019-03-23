import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./config/store";
import Header from "./Components/Header";
import RouteContent from "./Router";
import "./styles.css";

console.log("check");

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <RouteContent />
      </div>
    </BrowserRouter>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
