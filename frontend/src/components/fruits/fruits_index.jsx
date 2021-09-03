import React from 'react';
import FruitsIndexItem from './fruits_index_item';

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
      <div>
        <ul>
          {fruits.map(fruit => 
            <FruitsIndexItem 
              key={`${fruit.id}-${fruit.name}`} 
              fruit={fruit} 
            />
          )}
        </ul>
      </div>
    ) : '';
  }
}

export default FruitsIndex;