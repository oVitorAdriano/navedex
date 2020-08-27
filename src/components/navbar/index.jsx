import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { disconnect } from "../../actions/session";

import logo from "../../assets/images/logo.png";

import StyledNavbar from "./style";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = event => {
    dispatch(disconnect());
  };

  return (
    <StyledNavbar>
      <Link to="/home">
        <img src={logo} alt="nave.rs logo" />
      </Link>

      <button onClick={handleLogout}>Sair</button>
    </StyledNavbar>
  );
};

export default Navbar;
