import React from 'react';
import './modal.css';

const Modal = function ({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <p>INSIDE MODAL</p>
      </div>
    </div>
  );
}

export default Modal;