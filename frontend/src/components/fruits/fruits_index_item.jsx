import React from 'react';

class FruitsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fruit, imgUrl, openModal } = this.props;

    return (fruit.name !== 'Grapes') && 
      (fruit.name !== 'Lime') && 
      (fruit.name !== 'Melon') && 
      (fruit.name !== 'Persimmon') && 
      (fruit.name !== 'Papaya') 
      ? <li className="indiv-fruit" onClick={() => openModal(fruit)}>
          <img className="fruit-pic"
            src={imgUrl.toLowerCase()} 
            alt={fruit.name} />
        </li>
      : '';
  }
}

export default FruitsIndexItem;