import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import immer from "immer";

import Modal from "../modal";
import api from "../../services/api";

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

        console.log(response.data);

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
      <div>
        <img
          src={state.url}
          alt={state.name}
          style={{ width: 50, height: 50 }}
        />
        <br />
      </div>

      <div>
        <div>
          <strong>
            {state.name} ({state.id})
          </strong>

          <br />

          <span>{state.job_role}</span>
        </div>

        {!control.isFetching && (
          <>
            <div>
              <span>Idade</span>
              <br />
              <span>
                {memoizedBirthdate.age} anos - {memoizedBirthdate.date}
              </span>
            </div>

            <div>
              <span>Data de admissão</span>
              <br />
              <span>{new Date(state.admission_date).toLocaleDateString()}</span>
            </div>

            <div>
              <span>Projetos que participou</span>
              <br />
              <span>{state.project}</span>
            </div>
          </>
        )}

        <div>
          <button>Editar</button>
          <button>Excluir</button>
        </div>
      </div>
    </Modal>
  );
};

export default NaverPreview;
