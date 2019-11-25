import { connect } from 'react-redux';

import { toggleModalReg } from '../actions';
import RegModal from '../components/RegModal';

const mapStateToProps = ({ rsEffects }) => ({ modalReg: rsEffects.modalReg });

export default connect(
  mapStateToProps,
  { toggleModalReg }, // к action автоматически байндится dispatch
)(RegModal);
