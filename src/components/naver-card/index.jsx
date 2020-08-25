import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { openNaverView } from "../../actions/navers";

const NaverCard = ({ id, name, job_role, url }) => {
  const dispatch = useDispatch();

  const handleOpen = event => {
    event.stopPropagation();

    dispatch(openNaverView({ id, name }));
  };

  return (
    <div onClick={handleOpen}>
      <img src={url} alt={name} style={{ width: 50, height: 50 }} />
      <br />

      <div>
        <strong>
          {name} ({id})
        </strong>
        <br />
        <span>{job_role}</span>
      </div>

      <div>
        <button>Editar</button>
        <button>Excluir</button>
      </div>

      <hr />
    </div>
  );
};

if (process.env.NODE_ENV === "development") {
  NaverCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job_role: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };
}

export default NaverCard;
