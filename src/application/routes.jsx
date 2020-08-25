import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/login";
import Home from "../pages/home";

const Routes = () => {
  const { isAuthenticated } = useSelector(state => state.session);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          {!isAuthenticated ? <Login /> : <Redirect to="/home" />}
        </Route>

        <Route path="/home">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
