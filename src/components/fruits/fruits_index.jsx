import React from 'react';
import FruitsIndexItem from './fruits_index_item';
import './fruits.css';

class FruitsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchFruits();
  }

  render() {
    const { fruits, openModal, closeModal } = this.props;

    return fruits ? (
      <div className="fruits-index">
        <ul className="fruits-list">
          {fruits.map(fruit => 
            <FruitsIndexItem 
              key={`${fruit.id}-${fruit.name}`} 
              fruit={fruit}
              imgUrl={`https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/${fruit.name}.png`}
              openModal={openModal}
              closeModal={closeModal}
            />
          )}
        </ul>
      </div>
    ) : '';
  }
}

export default FruitsIndex;