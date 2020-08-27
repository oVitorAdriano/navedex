import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

import { closeNaverView } from "../../actions/navers";
import StyledModal from "./style";

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
      <StyledModal onClick={handleClose} data-close>
        <div>
          <button data-close>
            <MdClose />
          </button>

          {children}
        </div>
      </StyledModal>
    )
  );
};

if (process.env.NODE_ENV === "development") {
  Modal.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ]).isRequired
  };
}

export default Modal;
