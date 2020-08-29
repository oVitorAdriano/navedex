import React from "react";
import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

import StyledNaverActions from "./style";

const NaverActions = ({ id, data }) => {
  return (
    <StyledNaverActions>
      <Link
        to={{
          pathname: `/navers/${id}/edit`,
          state: data
        }}
      >
        <MdEdit />
      </Link>

      <button>
        <MdDelete />
      </button>
    </StyledNaverActions>
  );
};

NaverActions.defaultProps = {
  id: undefined,
  data: undefined
};

if (process.env.NODE_ENV === "development") {
  NaverActions.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  };
}

export default NaverActions;
