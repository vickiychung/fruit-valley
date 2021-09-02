import React from 'react';

class FruitsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFruitInfo('apple');
  }

  render() {
    const { fruitInfo } = this.props;
      
    return (
      <div>
        fruitInfo
      </div>
    )
  }
}

export default FruitsIndex;