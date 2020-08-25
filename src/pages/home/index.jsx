import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadNavers, closeNaverView } from "../../actions/navers";
import api from "../../services/api";

import NaversList from "../../components/navers-list";
import NaverCard from "../../components/naver-card";
import NaverPreview from "../../components/naver-preview";
import withApplication from "../../utils/with-application";

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

    return () => dispatch(closeNaverView());
  }, [dispatch]);

  return (
    <>
      <NaversList isFetching={isFetching}>
        {navers.map(({ id, name, job_role, url }) => (
          <NaverCard key={id} {...{ id, name, job_role, url }} />
        ))}
      </NaversList>

      <NaverPreview />
    </>
  );
};

export default withApplication(Home);
