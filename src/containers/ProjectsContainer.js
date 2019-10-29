import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Projects from '../components/Projects';
import { toggleModal, getProjects } from '../actions';

class ProjectsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.getProjects = props.getProjects;
  }

  componentDidMount() {
    this.getProjects();
  }

  render() {
    return <Projects {...this.props} />;
  }
}
const mapStateToProps = ({ projects, user }) => ({
  projects: projects.projects,
  loading: projects.loading,
  authToken: user.authToken,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { authToken, projects, loading } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    projects,
    loading,
    toggleModal: () => dispatch(toggleModal()),
    getProjects: () => dispatch(getProjects(authToken)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ProjectsContainer);

ProjectsContainer.propTypes = {
  getProjects: PropTypes.func.isRequired,
};
