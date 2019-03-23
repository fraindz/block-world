import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchResult from "./pages/Searchresult";
import Block from "./pages/Block";
import Transaction from "./pages/Transaction";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="search/:query" component={SearchResult} />
    <Route exact path="/block/:hash" component={Block} />
    <Route exact path="/tx/:hash" component={Transaction} />
  </Switch>
);

export default Router;
