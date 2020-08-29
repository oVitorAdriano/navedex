import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import NaverActions from "../naver-actions";

import StyledNaverCard from "./style";

const NaverCard = ({ id, name, job_role, url }) => {
  const location = useLocation();

  return (
    <StyledNaverCard thumb={url}>
      <div>
        <Link
          to={{
            pathname: `/navers/${id}`,
            state: {
              background: location
            }
          }}
          className="thumb"
        />

        <strong>{name}</strong>

        <span>{job_role}</span>

        <NaverActions id={id} />
      </div>
    </StyledNaverCard>
  );
};

NaverCard.defaultProps = {
  id: undefined,
  name: undefined,
  job_role: undefined,
  url: undefined
};

if (process.env.NODE_ENV === "development") {
  NaverCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job_role: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };
}

export default NaverCard;
