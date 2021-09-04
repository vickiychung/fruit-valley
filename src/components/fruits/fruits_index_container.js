import { connect } from 'react-redux';
import { fetchFruits } from '../../actions/fruits_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import FruitsIndex from './fruits_index';

const mapStateToProps = (state) => {
  return {
    fruits: state.fruits.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFruits: () => dispatch(fetchFruits()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitsIndex);