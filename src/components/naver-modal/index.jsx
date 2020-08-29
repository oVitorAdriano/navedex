import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import api from "../../services/api";
import { updateNaver } from "../../actions/navers";

import Loader from "../loader";
import Modal from "../modal";
import NotFound from "../not-found";
import NaverActions from "../naver-actions";
import { getLocaleDate, calculateAge } from "../../utils/dates";

import StyledNaverModal from "./style";

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

const NaverModal = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentNaverState = useSelector(state =>
    state.navers.navers.find(naver => naver.id === params.id)
  );

  const [control, setControl] = useState({
    isFetching: true,
    errorMessage: ""
  });
  const [state, setState] = useState(currentNaverState || initialState);

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
    <Modal isActive handleClose={history.goBack}>
      <StyledNaverModal thumb={state.url}>
        {control.errorMessage ? (
          <NotFound goBack="/home">{control.errorMessage}</NotFound>
        ) : (
          <>
            <div className="thumb" />

            {!control.isFetching ? (
              <main>
                <header>
                  <strong>{state.name}</strong>

                  <span>{state.job_role}</span>
                </header>
                <section>
                  <strong>Idade</strong>

                  <span>{calculateAge(state.birthdate)} anos</span>
                </section>

                <section>
                  <strong>Data de admissão</strong>

                  <span>{getLocaleDate(state.admission_date)}</span>
                </section>

                <section>
                  <strong>Projetos que participou</strong>

                  <span>{state.project}</span>
                </section>

                <NaverActions id={state.id} data={state} />
              </main>
            ) : (
              <Loader>Carregando...</Loader>
            )}
          </>
        )}
      </StyledNaverModal>
    </Modal>
  );
};

export default NaverModal;
