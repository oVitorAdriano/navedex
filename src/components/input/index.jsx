import React from "react";
import PropTypes from "prop-types";

import StyledInput from "./style";

const Input = ({ name, label, autoFocus, type, value, onChange }) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>

      <input
        autoComplete="off"
        autoFocus={autoFocus}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </StyledInput>
  );
};

Input.defaultProps = {
  name: undefined,
  label: undefined,
  autoFocus: false,
  type: "text",
  value: "",
  onChange: () => {}
};

if (process.env.NODE_ENV === "development") {
  Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    autoFocus: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
  };
}

export default Input;
