import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import immer from "immer";

import Modal from "../modal";
import NaverActions from "../naver-actions";
import api from "../../services/api";
import StyledNaverPreview from "./style";

const initialState = {
  id: "",
  user_id: "",
  name: "",
  job_role: "",
  birthdate: "",
  admission_date: "",
  project: "",
  url: ""
};

const NaverPreview = () => {
  const { current } = useSelector(state => state.navers);

  const [control, setControl] = useState({
    isFetching: true,
    errorMessage: ""
  });
  const [state, setState] = useState(initialState);

  /**
   * OBSERVAÇÃO
   *
   * Este cálculo não é preciso, pois não é realizado
   * levando em consideração a timezone do usuário.
   */
  const memoizedBirthdate = useMemo(() => {
    const birthdate = new Date(state.birthdate);

    const age = new Date(Date.now() - birthdate).getFullYear() - 1970;
    const date = birthdate.toLocaleDateString();

    return {
      age,
      date
    };
  }, [state.birthdate]);

  useEffect(() => {
    const init = async () => {
      setControl({
        isFetching: true,
        errorMessage: ""
      });

      try {
        const response = await api.get(`/navers/${current.id}`);

        setControl({
          isFetching: false,
          errorMessage: ""
        });

        setState(
          immer(draft => {
            draft.id = response.data.id;
            draft.user_id = response.data.user_id;
            draft.name = response.data.name;
            draft.job_role = response.data.job_role;
            draft.birthdate = response.data.birthdate;
            draft.admission_date = response.data.admission_date;
            draft.project = response.data.project;
            draft.url = response.data.url;
          })
        );
      } catch (e) {
        setControl({
          isFetching: false,
          errorMessage: "Ńaver não encontrado."
        });
      }
    };

    setState(
      immer(draft => {
        draft.id = current.id;
        draft.name = current.name;
      })
    );

    current.id && current.name ? init() : setState(initialState);
  }, [current]);

  return (
    <Modal>
      <StyledNaverPreview thumb={state.url}>
        <div className="thumb" />

        <main>
          <header>
            <strong>{state.name}</strong>

            <span>{state.job_role}</span>
          </header>

          {!control.isFetching && (
            <>
              <section>
                <strong>Idade</strong>

                <span>
                  {memoizedBirthdate.age} anos - {memoizedBirthdate.date}
                </span>
              </section>

              <section>
                <strong>Data de admissão</strong>

                <span>
                  {new Date(state.admission_date).toLocaleDateString()}
                </span>
              </section>

              <section>
                <strong>Projetos que participou</strong>

                <span>{state.project}</span>
              </section>

              <NaverActions id={state.id} />
            </>
          )}
        </main>
      </StyledNaverPreview>
    </Modal>
  );
};

export default NaverPreview;
