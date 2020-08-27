import React from "react";
import styled from "styled-components";

import Navbar from "../components/navbar";

const withApplication = WrappedComponent => {
  return () => (
    <StyledComponent>
      <Navbar />

      <WrappedComponent />
    </StyledComponent>
  );
};

const StyledComponent = styled.div`
  min-height: 100%;
  padding: 0 32px;
`;

export default withApplication;
