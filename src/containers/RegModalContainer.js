import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import RegModal from '../components/RegModal';

const mapStateToProps = state => ({
  modal: state.rsEffects.modal,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegModal);
