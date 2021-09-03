import React from 'react';

const Modal = function ({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>

      </div>
    </div>
  );
}

export default Modal;