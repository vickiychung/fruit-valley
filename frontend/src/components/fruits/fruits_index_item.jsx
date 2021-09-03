import React from 'react';

class FruitsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fruit, imgUrl } = this.props;
    
    return(
      <li className="indiv-fruit">
        {fruit.name}

        <img className="fruit-pic"
          src={imgUrl.toLowerCase()} 
          alt={fruit.name} />
      </li>
    ) 
  }
}

export default FruitsIndexItem;