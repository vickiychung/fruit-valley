import { connect } from 'react-redux';
import { fetchFruitInfo } from '../../actions';
import FruitsIndex from './fruits_index';

const mapStateToProps = (state) => {
  return {
    fruitInfo: state.fruitInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFruitInfo: fruitName => dispatch(fetchFruitInfo(fruitName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitsIndex);