import React from "react";
import PropTypes from "prop-types";

import StyledLoader from "./style";

const Loader = ({ children }) => {
  return (
    <StyledLoader>
      <div />

      {children && <span>{children}</span>}
    </StyledLoader>
  );
};

Loader.defaultProps = {
  children: undefined
};

if (process.env.NODE_ENV === "development") {
  Loader.propTypes = {
    children: PropTypes.string
  };
}

export default Loader;
