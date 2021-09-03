import { connect } from 'react-redux';
import { fetchFruits, fetchFruitInfo } from '../../actions/fruits_actions';
import FruitsIndex from './fruits_index';

const mapStateToProps = (state) => {
  return {
    fruits: state.fruits.data,
    fruitInfo: state.fruitInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFruits: () => dispatch(fetchFruits()),
    fetchFruitInfo: fruitName => dispatch(fetchFruitInfo(fruitName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitsIndex);