import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import immer from "immer";

import api from "../../services/api";
import { openNaverView } from "../../actions/navers";

import { StyledNaverForm } from "../../assets/css/style";
import PageHeader from "../../components/page-header";
import Input from "../../components/input";
import { Button } from "../../components/button";
import withApplication from "../../utils/with-application";

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
    <StyledNaverForm>
      <PageHeader goBack="/home">Adicionar Naver</PageHeader>

      <form onSubmit={handleSubmit}>
        {control.errorMessage && (
          <span className="errorMessage">{control.errorMessage}</span>
        )}

        <div>
          <Input
            autoFocus
            label="Nome"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />

          <Input
            label="Cargo"
            type="text"
            name="job_role"
            value={state.job_role}
            onChange={handleChange}
          />

          <Input
            label="Data de nascimento"
            type="date"
            name="birthdate"
            value={state.birthdate}
            onChange={handleChange}
          />

          <Input
            label="Data de admissão"
            type="date"
            name="admission_date"
            value={state.admission_date}
            onChange={handleChange}
          />

          <Input
            label="Projetos que participou"
            type="text"
            name="project"
            value={state.project}
            onChange={handleChange}
          />

          <Input
            label="URL da foto do Naver"
            type="text"
            name="url"
            value={state.url}
            onChange={handleChange}
          />
        </div>

        <Button submit theme="dark" disabled={control.isFetching}>
          Salvar
        </Button>
      </form>
    </StyledNaverForm>
  );
};

export default withApplication(Create);
