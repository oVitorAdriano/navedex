import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./style";

const Button = ({ submit, disabled, onClick, theme, children }) => {
  return (
    <StyledButton
      type={submit ? "submit" : "button"}
      onClick={onClick}
      disabled={disabled}
      theme={theme}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  submit: false,
  disabled: false,
  onClick: () => {},
  theme: "light",
  children: undefined
};

if (process.env.NODE_ENV === "development") {
  Button.propTypes = {
    submit: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    theme: PropTypes.oneOf(["light", "dark"]),
    children: PropTypes.string.isRequired
  };
}

export default Button;
