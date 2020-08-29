import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import immer from "immer";

import api from "../../services/api";

import { StyledNaverForm } from "../../assets/css/style";
import PageHeader from "../../components/page-header";
import Input from "../../components/input";
import { Button, LinkButton, Group } from "../../components/button";
import Modal from "../../components/modal";
import withApplication from "../../utils/with-application";

const Create = () => {
  const history = useHistory();

  const [control, setControl] = useState({
    isFetching: false,
    errorMessage: "",
    naverId: null
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

    setControl(
      immer(draft => {
        draft.isFetching = true;
        draft.errorMessage = "";
      })
    );

    try {
      const response = await api.post("/navers", {
        ...state,
        birthdate: localeDateString(state.birthdate),
        admission_date: localeDateString(state.admission_date)
      });

      setControl({
        isFetching: false,
        errorMessage: "",
        naverId: response.data.id
      });
    } catch (e) {
      setControl(
        immer(draft => {
          draft.isFetching = false;
          draft.errorMessage = "Algo deu errado...";
        })
      );
    }
  };

  return (
    <StyledNaverForm>
      <PageHeader goBack="/home">Adicionar Naver</PageHeader>

      <form onSubmit={handleSubmit}>
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

        {control.errorMessage && (
          <span className="errorMessage">{control.errorMessage}</span>
        )}

        <Button submit theme="dark" disabled={control.isFetching}>
          Salvar
        </Button>
      </form>

      <Modal
        isActive={!!control.naverId}
        handleClose={() => history.push("/home")}
      >
        <h1>Naver criado</h1>

        <p>Naver criado com sucesso!</p>

        <Group>
          <LinkButton to="/home">Voltar</LinkButton>

          <LinkButton theme="dark" to={`/navers/${control.naverId}`}>
            Ver perfil
          </LinkButton>
        </Group>
      </Modal>
    </StyledNaverForm>
  );
};

export default withApplication(Create);
