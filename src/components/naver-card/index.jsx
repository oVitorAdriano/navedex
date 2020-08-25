import React from "react";
import PropTypes from "prop-types";

const NaverCard = ({ id, name, job_role, url }) => {
  return (
    <div>
      <img src={url} alt={name} style={{ width: 280, height: 280 }} />
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
