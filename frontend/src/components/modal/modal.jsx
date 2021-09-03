import React from 'react';
import './modal.css';

const Modal = function ({ fruit, closeModal }) {
  if (!fruit) {
    return null;
  }

  const imgUrl = `https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/${fruit.name}.png`
 
  return (

    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div className="modal-left">
          <h3 className="modal-fruit-name">{fruit.name}</h3>

          <img className="modal-fruit-pic"
              src={imgUrl.toLowerCase()} 
              alt={fruit.name} />
        </div>

        <div className="modal-right">

        </div>
      </div>
    </div>
  );
}

export default Modal;