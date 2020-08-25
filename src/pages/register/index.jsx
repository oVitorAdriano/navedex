import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import immer from "immer";

import api from "../../services/api";

const Register = () => {
  const history = useHistory();

  const [control, setControl] = useState({
    isFetching: false,
    errorMessage: ""
  });

  const [state, setState] = useState({
    email: "",
    password: ""
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
      const response = await api.post("/users/signup", state);

      history.push({
        pathname: "/login",
        state: {
          email: response.data.email
        }
      });
    } catch (e) {
      setControl({
        isFetching: false,
        errorMessage: "Algo deu errado..."
      });
    }
  };

  return (
    <div>
      <h3>Cadastro</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <strong>E-mail</strong>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <strong>Senha</strong>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
        </div>

        {control.errorMessage && (
          <div>
            <span>{control.errorMessage}</span>
          </div>
        )}

        <div>
          <Link to="/login">Conectar</Link>

          <button type="submit" disabled={control.isFetching}>
            Finalizar cadastro
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
