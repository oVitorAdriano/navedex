import React from "react";
import { useDispatch } from "react-redux";

import { disconnect } from "../../actions/session";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = event => {
    dispatch(disconnect());
  };

  return (
    <nav>
      <strong>Logo</strong>

      <button onClick={handleLogout}>Sair</button>
    </nav>
  );
};

export default Navbar;
