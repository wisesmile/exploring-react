import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./views/Home";
import { User } from "./views/User";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/user" exact component={User} />
  </Switch>
);
