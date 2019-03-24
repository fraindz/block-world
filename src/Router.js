import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import SearchResult from "./Components/SearchResult";
import Block from "./Components/ShowBlock";
import ShowTx from "./Components/ShowTx";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/search/:query" component={SearchResult} />
    <Route exact path="/block/:hash" component={Block} />
    <Route exact path="/tx/:hash" component={ShowTx} />
  </Switch>
);

export default Router;
