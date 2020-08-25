import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const NaversList = ({ isFetching, children }) => {
  // const { navers, current } = useSelector(state => state.navers);

  return (
    <div>
      <div>
        <h3>Navers</h3>

        <Link to="create">Adicionar Naver</Link>
      </div>

      <div>{children}</div>

      {/**
       * TODO: Current naver modal
       */}
    </div>
  );
};

if (process.env.NODE_ENV === "development") {
  NaversList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  };
}

export default NaversList;
