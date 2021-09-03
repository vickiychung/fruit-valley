import React from 'react';

class FruitsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFruits();
    // this.props.fetchFruitInfo('apple');
  }

  render() {
    const { fruits } = this.props;
      
    return (
      <div>
        <p>test</p>
      </div>
    )
  }
}

export default FruitsIndex;