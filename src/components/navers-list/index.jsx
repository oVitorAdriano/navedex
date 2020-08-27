import React from "react";
import { MdSync } from "react-icons/md";
import PropTypes from "prop-types";

import { LinkButton } from "../../components/button";

import StyledNaversList from "./style";

const NaversList = ({ isFetching, children }) => {
  return (
    <StyledNaversList>
      <header>
        <h2>Navers</h2>

        {isFetching && <MdSync />}

        <LinkButton theme="dark" to="create">
          Adicionar Naver
        </LinkButton>
      </header>

      <section>{children}</section>
    </StyledNaversList>
  );
};

if (process.env.NODE_ENV === "development") {
  NaversList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  };
}

export default NaversList;
