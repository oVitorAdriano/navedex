import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { openNaverView } from "../../actions/navers";

import NaverActions from "../naver-actions";

import StyledNaverCard from "./style";

const NaverCard = ({ id, name, job_role, url }) => {
  const dispatch = useDispatch();

  const handleOpen = event => {
    event.stopPropagation();

    dispatch(openNaverView({ id, name }));
  };

  return (
    <StyledNaverCard thumb={url}>
      <div>
        <div className="thumb" onClick={handleOpen} />

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
