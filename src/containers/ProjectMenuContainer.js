import { connect } from 'react-redux';
import { toggleModalProjAdd } from '../actions';

import ProjectMenu from '../components/ProjectMenu';

// const mapStateToProps = ({ rsEffects }) => ({
//   // modalProjAdd: rsEffects.modalProjAdd,
// });

const mapDispatchToProps = dispatch => ({
  toggleModalProjAdd: () => dispatch(toggleModalProjAdd()),
});

export default connect(
  null,
  // mapStateToProps,
  mapDispatchToProps,
)(ProjectMenu);
