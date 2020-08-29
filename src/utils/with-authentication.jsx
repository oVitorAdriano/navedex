import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { AuthenticationTemplate } from "../components/templates";

const withApplication = WrappedComponent => {
  return () => {
    const { isAuthenticated } = useSelector(state => state.session);

    return !isAuthenticated ? (
      <AuthenticationTemplate>
        <WrappedComponent />
      </AuthenticationTemplate>
    ) : (
      <Redirect to="/home" />
    );
  };
};

export default withApplication;
