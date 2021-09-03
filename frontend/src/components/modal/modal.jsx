import React from 'react';
import './modal.css';

const Modal = function ({ fruit, closeModal }) {
  if (!fruit) {
    return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {fruit.name}
      </div>
    </div>
  );
}

export default Modal;