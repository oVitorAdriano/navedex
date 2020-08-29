import React from "react";
import PropTypes from "prop-types";

import { StyledGroup } from "./style";

const Group = ({ children }) => {
  return <StyledGroup>{children}</StyledGroup>;
};

Group.defaultProps = {
  children: undefined
};

if (process.env.NODE_ENV === "development") {
  Group.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ]).isRequired
  };
}

export default Group;
