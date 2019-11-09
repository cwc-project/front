import { connect } from 'react-redux';
import { toggleModalReg } from '../actions';
import RegModal from '../components/RegModal';

const mapStateToProps = ({ rsEffects }) => ({ modalReg: rsEffects.modalReg });

const mapDispatchToProps = dispatch => ({
  toggleModalReg: () => dispatch(toggleModalReg()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegModal);
