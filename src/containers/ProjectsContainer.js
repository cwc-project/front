import { connect } from 'react-redux';
import Projects from '../components/Projects';

const mapStateToProps = state => ({
  projects: state.projects.projects,
  loading: state.projects.loading,
});

// const mapDispatchToProps = dispatch => ({
//   toggleModal: () => dispatch(toggleModal()),
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Projects);
