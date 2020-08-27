import React from "react";
import PropTypes from "prop-types";

import { StyledLinkButton } from "./style";

const LinkButton = ({ to, theme, children }) => {
  return (
    <StyledLinkButton to={to} theme={theme}>
      {children}
    </StyledLinkButton>
  );
};

LinkButton.defaultProps = {
  to: undefined,
  theme: "light",
  children: undefined
};

if (process.env.NODE_ENV === "development") {
  LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    theme: PropTypes.oneOf(["light", "dark"]),
    children: PropTypes.string.isRequired
  };
}

export default LinkButton;
