import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import immer from "immer";

import { authenticate } from "../../actions/session";
import api from "../../services/api";

import logo from "../../assets/images/logo.png";
import { StyledAuthentication } from "../../assets/css/style";
import Input from "../../components/input";
import { Button } from "../../components/button";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [control, setControl] = useState({
    isFetching: false,
    errorMessage: ""
  });

  const [state, setState] = useState(() => {
    try {
      return {
        email: location.state.email,
        password: ""
      };
    } catch (e) {
      return {
        email: "testing-user@nave.rs",
        password: "nave1234"
      };
    }
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

    setControl({
      isFetching: true,
      errorMessage: ""
    });

    try {
      const response = await api.post("/users/login", state);

      dispatch(
        authenticate({
          token: response.data.token,
          user: {
            id: response.data.id,
            email: response.data.email
          }
        })
      );
    } catch (e) {
      setControl({
        isFetching: false,
        errorMessage: "E-mail ou senha inválidos."
      });
    }
  };

  return (
    <StyledAuthentication>
      <div>
        <img src={logo} alt="nave.rs logo" />

        <form onSubmit={handleSubmit}>
          <Input
            autoFocus
            label="E-mail"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />

          <Input
            label="Senha"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />

          {control.errorMessage && (
            <span className="errorMessage">{control.errorMessage}</span>
          )}

          <Button submit theme="dark" disabled={control.isFetching}>
            Entrar
          </Button>
        </form>
      </div>
    </StyledAuthentication>
  );
};

export default Login;
