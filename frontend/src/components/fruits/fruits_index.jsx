import React from 'react';
import FruitsIndexItem from './fruits_index_item';
import './fruits.css';

class FruitsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFruits();
  }

  render() {
    const { fruits } = this.props;

    return fruits ? (
      <div className="fruits-index">
        <ul className="fruits-list">
          {fruits.map(fruit => 
            <FruitsIndexItem 
              key={`${fruit.id}-${fruit.name}`} 
              fruit={fruit}
              imgUrl={`https://passport-media.s3-us-west-1.amazonaws.com/images/eng-intern-interview/${fruit.name}.png`} 
            />
          )}
        </ul>
      </div>
    ) : '';
  }
}

export default FruitsIndex;