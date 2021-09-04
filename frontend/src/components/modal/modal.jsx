import React from 'react';
import './modal.css';

const Modal = function ({ fruit, closeModal }) {
  if (!fruit) {
    return null;
  }

  const imgUrl = `https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/${fruit.name}.png`;
  const nutritions = fruit.nutritions;
 
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
          <div className="close" onClick={() => closeModal()}>
            x
          </div>

          <div className="modal-info">
            <span className="modal-info-bullet">
              <p>Genus:</p>
              <p>{fruit.genus}</p>
            </span>
            <span className="modal-info-bullet">
              <p>Family:</p>
              <p>{fruit.family}</p>
            </span>
            <span className="modal-info-bullet">
              <p>Order:</p>
              <p>{fruit.order}</p>
            </span>

            <span>
              Nutritions:
              <ul className="nutrition-list">
                <li>
                  <p>Carbohydrates:</p>
                  <p>{nutritions.carbohydrates}</p>
                </li>
                <li>
                  <p>Protein:</p>
                  <p>{nutritions.protein}</p>
                </li>
                <li>
                  <p>Fat:</p>
                  <p>{nutritions.fat}</p>
                </li>
                <li>
                  <p>Calories:</p>
                  <p>{nutritions.calories}</p>
                </li>
                <li>
                  <p>Sugar:</p>
                  <p>{nutritions.sugar}</p>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;