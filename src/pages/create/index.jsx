import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import immer from "immer";

import api from "../../services/api";

import { openNaverView } from "../../actions/navers";

const Create = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [control, setControl] = useState({
    isFetching: false,
    errorMessage: ""
  });
  const [state, setState] = useState({
    name: "",
    job_role: "",
    birthdate: "",
    admission_date: "",
    url: "",
    project: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setState(
      immer(draft => {
        draft[name] = value;
      })
    );
  };

  const localeDateString = date => new Date(date).toLocaleDateString();

  const handleSubmit = async event => {
    event.preventDefault();

    setControl({
      isFetching: true,
      errorMessage: ""
    });

    try {
      const response = await api.post("/navers", {
        ...state,
        birthdate: localeDateString(state.birthdate),
        admission_date: localeDateString(state.admission_date)
      });

      dispatch(
        openNaverView({
          id: response.data.id,
          name: response.data.name
        })
      );

      history.push("/home");
    } catch (e) {
      setControl({
        isFetching: false,
        errorMessage: "Algo deu errado..."
      });
    }
  };

  return (
    <div>
      <div>
        <Link to="/home">Voltar</Link>

        <h3>Adicionar Naver</h3>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <strong>Nome</strong>
            <input
              autoFocus
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <strong>Cargo</strong>
            <input
              type="text"
              name="job_role"
              value={state.job_role}
              onChange={handleChange}
            />
          </div>

          <div>
            <strong>Data de nascimento</strong>
            <input
              type="date"
              name="birthdate"
              value={state.birthdate}
              onChange={handleChange}
            />
          </div>

          <div>
            <strong>Data de admissão</strong>
            <input
              type="date"
              name="admission_date"
              value={state.admission_date}
              onChange={handleChange}
            />
          </div>

          <div>
            <strong>Projetos que participou</strong>
            <input
              type="text"
              name="project"
              value={state.project}
              onChange={handleChange}
            />
          </div>

          <div>
            <strong>URL da foto do Naver</strong>
            <input
              type="text"
              name="url"
              value={state.url}
              onChange={handleChange}
            />
          </div>

          {control.errorMessage && (
            <div>
              <span>{control.errorMessage}</span>
            </div>
          )}

          <div>
            <button type="submit" disabled={control.isFetching}>
              Salvar
            </button>
          </div>
        </form>
      </div>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Create;
