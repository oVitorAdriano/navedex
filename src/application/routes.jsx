import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Create from "../pages/create";
import View from "../pages/view";
import Edit from "../pages/edit";

import NaverModal from "../components/naver-modal";

const Routes = () => {
  const location = useLocation();
  const { isAuthenticated } = useSelector(state => state.session);

  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
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

        <Route exact path="/navers/:id">
          {isAuthenticated ? <View /> : <Redirect to="/login" />}
        </Route>

        <Route path="/navers/:id/edit">
          {isAuthenticated ? <Edit /> : <Redirect to="/login" />}
        </Route>
      </Switch>

      {background &&
        (isAuthenticated ? (
          <Route path="/navers/:id">
            <NaverModal />
          </Route>
        ) : (
          <Redirect to="/login" />
        ))}
    </>
  );
};

export default Routes;
