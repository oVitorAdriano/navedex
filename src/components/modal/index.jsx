import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { closeNaverView } from "../../actions/navers";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const { current } = useSelector(state => state.navers);

  const handleClose = event => {
    if (event.target.dataset.close) {
      dispatch(closeNaverView());
    }
  };

  return (
    current.id && (
      <div
        onClick={handleClose}
        data-close
        style={{ background: "#000c", padding: 5, fontSize: 11, color: "#fff" }}
      >
        <div>
          <div>
            <button data-close>X</button>
          </div>
        </div>

        <div>{children}</div>
      </div>
    )
  );
};

if (process.env.NODE_ENV === "development") {
  Modal.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  };
}

export default Modal;
