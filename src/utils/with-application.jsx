import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "../components/navbar";
import { ApplicationTemplate } from "../components/templates";

const withApplication = WrappedComponent => {
  return () => {
    const { isAuthenticated } = useSelector(state => state.session);

    return isAuthenticated ? (
      <ApplicationTemplate>
        <Navbar />

        <WrappedComponent />
      </ApplicationTemplate>
    ) : (
      <Redirect to="/login" />
    );
  };
};

export default withApplication;
