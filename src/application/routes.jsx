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

        <Route path="/login" children={<Login />} />
        <Route path="/register" children={<Register />} />

        <Route path="/home" children={<Home />} />

        <Route path="/navers/create" children={<Create />} />
        <Route exact path="/navers/:id" children={<View />} />
        <Route path="/navers/:id/edit" children={<Edit />} />
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
