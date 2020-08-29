import React from "react";
import PropTypes from "prop-types";

import { LinkButton } from "../button";

import StyledNotFound from "./style";

const NotFound = ({ goBack, children }) => {
  return (
    <StyledNotFound>
      <strong>404</strong>

      <span>{children}</span>

      <LinkButton to={goBack}>Voltar</LinkButton>
    </StyledNotFound>
  );
};

NotFound.defaultProps = {
  children: undefined,
  goBack: ".."
};

if (process.env.NODE_ENV === "development") {
  NotFound.propTypes = {
    goBack: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
        state: PropTypes.object
      })
    ]),
    children: PropTypes.string.isRequired
  };
}

export default NotFound;
