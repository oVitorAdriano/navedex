import React from "react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

import StyledNaverActions from "./style";

const NaverActions = ({ id }) => {
  return (
    <StyledNaverActions>
      <Link to={`/navers/${id}/edit`}>
        <MdEdit />
      </Link>

      <button>
        <MdDelete />
      </button>
    </StyledNaverActions>
  );
};

NaverActions.defaultProps = {
  id: undefined
};

if (process.env.NODE_ENV === "development") {
  NaverActions.propTypes = {
    id: PropTypes.string.isRequired
  };
}

export default NaverActions;
