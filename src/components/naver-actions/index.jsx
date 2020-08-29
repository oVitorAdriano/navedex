import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdEdit, MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

import { deleteNaver } from "../../actions/navers";
import api from "../../services/api";

import Modal from "../modal";
import { Button, Group } from "../button";

import StyledNaverActions from "./style";

const NaverActions = ({ id, data }) => {
  const dispatch = useDispatch();
  const [control, setControl] = useState({
    canDelete: false,
    deleted: false
  });

  const handleDelete = async event => {
    event.preventDefault();

    const response = await api.delete(`/navers/${id}`);

    setControl({ ...control, deleted: response.data.deleted });
  };

  const handleClose = event => {
    control.deleted && dispatch(deleteNaver({ id }));
    setControl({ ...control, canDelete: false });
  };

  return (
    <StyledNaverActions>
      <Link
        to={{
          pathname: `/navers/${id}/edit`,
          state: data
        }}
      >
        <MdEdit />
      </Link>

      <button>
        <MdDelete onClick={() => setControl({ ...control, canDelete: true })} />
      </button>

      <Modal isActive={control.canDelete} handleClose={handleClose}>
        {control.deleted ? (
          <>
            <h1>Naver excluído</h1>

            <p>Naver excluído com sucesso!</p>

            <Button theme="dark" onClick={handleClose}>
              Fechar
            </Button>
          </>
        ) : (
          <>
            <h1>Excluir Naver</h1>

            <p>Tem certeza que deseja excluir este Naver?</p>

            <form onSubmit={handleDelete}>
              <Group>
                <Button onClick={handleClose}>Cancelar</Button>

                <Button submit theme="dark">
                  Excluir
                </Button>
              </Group>
            </form>
          </>
        )}
      </Modal>
    </StyledNaverActions>
  );
};

NaverActions.defaultProps = {
  id: undefined,
  data: undefined
};

if (process.env.NODE_ENV === "development") {
  NaverActions.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  };
}

export default NaverActions;
