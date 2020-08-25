import React from "react";

import Navbar from "../components/navbar";

const withApplication = WrappedComponent => {
  return () => (
    <>
      <Navbar />

      <WrappedComponent />
    </>
  );
};

export default withApplication;
