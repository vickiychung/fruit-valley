import React from 'react';

class FruitsIndexItem extends React.Component {
  render() {
    const { fruit, imgUrl, openModal } = this.props;

    return (fruit.name === 'Apple') ||
        (fruit.name === 'Apricot') ||
        (fruit.name === 'Banana') ||
        (fruit.name === 'Blueberry') ||
        (fruit.name === 'Cherry') ||
        (fruit.name === 'Guava') ||
        (fruit.name === 'Lemon') ||
        (fruit.name === 'Mango') ||
        (fruit.name === 'Orange') ||
        (fruit.name === 'Pear') ||
        (fruit.name === 'Pineapple') ||
        (fruit.name === 'Raspberry') ||
        (fruit.name === 'Strawberry') ||
        (fruit.name === 'Tomato') ||
        (fruit.name === 'Watermelon')
      ? <li className="indiv-fruit" onClick={() => openModal(fruit)}>
          <img className="fruit-pic"
            src={imgUrl.toLowerCase()} 
            alt={fruit.name} />
        </li>
      : '';
  }
}

export default FruitsIndexItem;