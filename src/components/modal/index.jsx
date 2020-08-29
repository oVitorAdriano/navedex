import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

import StyledModal from "./style";

const Modal = ({ isActive, handleClose, children }) => {
  const handleClick = event => {
    event.target.dataset.close && handleClose();
  };

  useEffect(() => {
    const closeOnEsc = event => {
      event.preventDefault();
      event.code.toLowerCase() === "escape" && handleClose();
    };

    window.addEventListener("keyup", closeOnEsc);

    return () => window.removeEventListener("keyup", closeOnEsc);
  }, [handleClose]);

  return (
    isActive && (
      <StyledModal onClick={handleClick} data-close>
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

Modal.defaultProps = {
  isActive: false,
  handleClose: undefined,
  children: undefined
};

if (process.env.NODE_ENV === "development") {
  Modal.propTypes = {
    isActive: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element
    ]).isRequired
  };
}

export default Modal;
