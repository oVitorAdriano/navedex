import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import api from "../../services/api";
import { updateNaver } from "../../actions/navers";

import PageHeader from "../../components/page-header";
import NaverActions from "../../components/naver-actions";
import withApplication from "../../utils/with-application";

import StyledView from "./style";

const initialState = {
  id: "",
  name: "",
  admission_date: "",
  job_role: "",
  user_id: "",
  project: "",
  birthdate: "",
  url: ""
};

const View = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const currentNaverState = useSelector(state =>
    state.navers.navers.find(naver => naver.id === params.id)
  );

  const [control, setControl] = useState({
    isFetching: true,
    errorMessage: ""
  });
  const [state, setState] = useState(() => {
    return currentNaverState || initialState;
  });

  useEffect(() => {
    const init = async () => {
      setControl({
        isFetching: true,
        errorMessage: ""
      });

      try {
        const response = await api.get(`/navers/${params.id}`);

        dispatch(updateNaver(response.data));
        setState(response.data);
        setControl({
          isFetching: false,
          errorMessage: ""
        });
      } catch (e) {
        setControl({
          isFetching: false,
          errorMessage: "Naver não encontrado."
        });
      }
    };

    init();
  }, [dispatch, params.id]);

  return (
    <StyledView thumb={state.url}>
      <PageHeader goBack="/home">{(!!state.id && state.name) || ""}</PageHeader>

      {!control.isFetching ? (
        <main>
          <div className="thumb" />

          <section>
            <section>
              <strong>Cargo</strong>

              <span>{state.job_role}</span>
            </section>

            <section>
              <strong>Idade</strong>

              <span>{state.birthdate}</span>
            </section>

            <section>
              <strong>Data de admissão</strong>

              <span>{state.admission_date}</span>
            </section>

            <section>
              <strong>Projetos que participou</strong>

              <span>{state.project}</span>
            </section>

            <NaverActions id={state.id} data={state} />
          </section>
        </main>
      ) : (
        <span>Carregando...</span>
      )}
    </StyledView>
  );
};

export default withApplication(View);
