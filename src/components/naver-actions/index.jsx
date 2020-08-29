import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdEdit, MdDelete } from "react-icons/md";
import immer from "immer";
import PropTypes from "prop-types";

import { deleteNaver } from "../../actions/navers";
import api from "../../services/api";

import Modal from "../modal";
import { Button, Group } from "../button";

import StyledNaverActions from "./style";

const NaverActions = ({ id, data }) => {
  const dispatch = useDispatch();
  const [control, setControl] = useState({
    isFetching: false,
    canDelete: false,
    deleted: false
  });

  const handleDelete = async event => {
    event.preventDefault();

    setControl(
      immer(draft => {
        draft.isFetching = true;
      })
    );

    const response = await api.delete(`/navers/${id}`);

    setControl(
      immer(draft => {
        draft.isFetching = false;
        draft.deleted = response.data.deleted;
      })
    );
  };

  const handleClose = event => {
    control.deleted && dispatch(deleteNaver({ id }));

    setControl(
      immer(draft => {
        draft.canDelete = false;
      })
    );
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
                  {control.isFetching ? "Aguarde..." : "Excluir"}
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
