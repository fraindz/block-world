import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import SearchResult from "./Components/SearchResult";
import Block from "./Components/ShowBlock";
import Transaction from "./Components/Transaction";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/search/:query" component={SearchResult} />
    <Route exact path="/block/:hash" component={Block} />
    <Route exact path="/tx/:hash" component={Transaction} />
  </Switch>
);

export default Router;
