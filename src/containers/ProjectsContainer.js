import { connect } from 'react-redux';
import Projects from '../components/Projects';
import { toggleModal } from '../actions';

const mapStateToProps = state => ({
  projects: state.projects.projects,
  loading: state.projects.loading,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);
