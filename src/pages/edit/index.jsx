import React, { useState } from "react";
import { Redirect, useHistory, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import immer from "immer";

import { updateNaver } from "../../actions/navers";
import api from "../../services/api";

import { StyledNaverForm } from "../../assets/css/style";
import PageHeader from "../../components/page-header";
import Input from "../../components/input";
import { Button, Group, LinkButton } from "../../components/button";
import Modal from "../../components/modal";
import { getLocaleDate } from "../../utils/dates";
import withApplication from "../../utils/with-application";

const Edit = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();

  const currentNaverState =
    useSelector(state =>
      state.navers.navers.find(naver => naver.id === params.id)
    ) ||
    (location.state && location.state);

  const [control, setControl] = useState({
    isFetching: false,
    errorMessage: ""
  });
  const [state, setState] = useState(() => {
    return currentNaverState
      ? {
          name: currentNaverState.name,
          job_role: currentNaverState.job_role,
          birthdate: currentNaverState.birthdate.substr(0, 10),
          admission_date: currentNaverState.admission_date.substr(0, 10),
          project: currentNaverState.project,
          url: currentNaverState.url
        }
      : null;
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setState(
      immer(draft => {
        draft[name] = value;
      })
    );
  };

  const handleSubmit = async event => {
    event.preventDefault();

    setControl(
      immer(draft => {
        draft.isFetching = true;
        draft.errorMessage = "";
      })
    );

    try {
      const response = await api.put(`/navers/${params.id}`, {
        ...state,
        birthdate: getLocaleDate(state.birthdate),
        admission_date: getLocaleDate(state.admission_date)
      });

      setControl({
        isFetching: false,
        errorMessage: "",
        naverId: response.data.id
      });

      dispatch(updateNaver(response.data));
    } catch (e) {
      setControl(
        immer(draft => {
          draft.isFetching = false;
          draft.errorMessage = "Algo deu errado...";
        })
      );
    }
  };

  return currentNaverState ? (
    <StyledNaverForm>
      <PageHeader goBack={`/navers/${params.id}`}>Editar Naver</PageHeader>

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

        <Group>
          <LinkButton to={`/navers/${params.id}`}>Cancelar</LinkButton>

          <Button submit theme="dark" disabled={control.isFetching}>
            Salvar
          </Button>
        </Group>
      </form>

      <Modal
        isActive={!!control.naverId}
        handleClose={() => history.push("/home")}
      >
        <h1>Naver atualizado</h1>

        <p>Naver atualizado com sucesso!</p>

        <Group>
          <LinkButton to="/home">Voltar</LinkButton>

          <LinkButton theme="dark" to={`/navers/${control.naverId}`}>
            Ver perfil
          </LinkButton>
        </Group>
      </Modal>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </StyledNaverForm>
  ) : (
    <Redirect to={`/navers/${params.id}`} />
  );
};

export default withApplication(Edit);
