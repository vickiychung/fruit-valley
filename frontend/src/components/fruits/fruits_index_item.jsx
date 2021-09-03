import React from 'react';

class FruitsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fruit } = this.props;

    return(
      <li>
        {fruit.name}
      </li>
    ) 
  }
}

export default FruitsIndexItem;