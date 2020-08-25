import React from "react";
import { useDispatch } from "react-redux";

import { authenticate } from "../../actions/session";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Conectar</h3>

      <button
        onClick={() =>
          dispatch(
            authenticate({
              token: "oi2j3498jht40",
              user: {
                id: 1,
                email: "v4savedra.dev@gmail.com"
              }
            })
          )
        }
      >
        Conectar
      </button>
    </div>
  );
};

export default Login;
