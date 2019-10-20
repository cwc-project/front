import { connect } from 'react-redux';

import ProjectsList from '../components/ProjectsList';

const mapStateToProps = state => ({
  projects: state.projects.projects,
});

// const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(ProjectsList);
