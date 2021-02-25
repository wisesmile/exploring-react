import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Hello from "./components/Hello";
import NotFound from "./components/NotFound";
import Signin from "./components/CognitoForms/SignIn";
import Signup from "./components/CognitoForms/SignUp";
import Signout from "./components/CognitoForms/SignOut";
import ChangePassword from "./components/CognitoForms/ChangePassword";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/login">
        <Signin />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/change-password">
        <ChangePassword />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/hello">
        <Hello />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/signout">
        <Signout />
      </AuthenticatedRoute>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
