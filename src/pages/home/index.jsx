import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdSync } from "react-icons/md";

import { loadNavers } from "../../actions/navers";
import api from "../../services/api";

import { LinkButton } from "../../components/button";
import NaversList from "../../components/navers-list";
import NaverCard from "../../components/naver-card";
import withApplication from "../../utils/with-application";

import StyledHome from "./style";

const Home = () => {
  const dispatch = useDispatch();
  const { navers } = useSelector(state => state.navers);

  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    const init = async () => {
      const response = await api.get("/navers");

      dispatch(loadNavers(response.data));
      setFetching(false);
    };

    init();
  }, [dispatch]);

  return (
    <StyledHome>
      <header>
        <h2>Navers</h2>

        {isFetching && <MdSync />}

        <LinkButton theme="dark" to="/navers/create">
          Adicionar Naver
        </LinkButton>
      </header>

      <NaversList isFetching={isFetching}>
        {navers.map(naver => (
          <NaverCard key={naver.id} {...naver} />
        ))}
      </NaversList>
    </StyledHome>
  );
};

export default withApplication(Home);
