import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Create from "../pages/create";

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

        <Route path="/register">
          {!isAuthenticated ? <Register /> : <Redirect to="/home" />}
        </Route>

        <Route path="/home">
          {isAuthenticated ? <Home /> : <Redirect to="/login" />}
        </Route>

        <Route path="/navers/create">
          {isAuthenticated ? <Create /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
