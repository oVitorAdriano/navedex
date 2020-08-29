import React from "react";
import PropTypes from "prop-types";

import { LinkButton } from "../button";
import Loader from "../loader";

import StyledNaversList, { EmptyList } from "./style";

const NaversList = ({ isFetching, children }) => {
  return isFetching ? (
    <Loader>Carregando navers...</Loader>
  ) : !!children.length ? (
    <StyledNaversList>{children}</StyledNaversList>
  ) : (
    <EmptyList>
      <span>Não há navers cadastrados.</span>

      <LinkButton to="/navers/create">Adicionar Naver</LinkButton>
    </EmptyList>
  );
};

if (process.env.NODE_ENV === "development") {
  NaversList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  };
}

export default NaversList;
