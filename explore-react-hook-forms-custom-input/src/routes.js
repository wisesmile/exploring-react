import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm } from "./views/Demo/LoginFormStyledComponents";
import { BuyerChoiceForm } from "./views/BuyerChoice/Form";
import Home from "./views/Home";

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={LoginForm} />
    <Route path="/buyer-choice" exact component={BuyerChoiceForm} />
  </Switch>
);
