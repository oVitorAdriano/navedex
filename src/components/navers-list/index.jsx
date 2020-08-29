import React from "react";
import PropTypes from "prop-types";

import { LinkButton } from "../button";

import StyledNaversList, { LoadingMessage, EmptyList } from "./style";

const NaversList = ({ isFetching, children }) => {
  console.log(children);

  return isFetching ? (
    <LoadingMessage>Carregando navers...</LoadingMessage>
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
