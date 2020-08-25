import React from "react";
import { useDispatch } from "react-redux";

import { disconnect } from "../../actions/session";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Bem-vindo</h3>

      <button onClick={() => dispatch(disconnect())}>Sair</button>
    </div>
  );
};

export default Home;
