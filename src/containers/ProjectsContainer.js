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

ProjectsContainer.propTypes = {
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = ({ projects, user, fetch }) => ({
  projectsList: projects.projectsList,
  projectsAmount: projects.projectsAmount,
  loading: fetch.loading.projects,
  authToken: user.authToken,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { projectsList, projectsAmount, loading, authToken } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    projectsList,
    projectsAmount,
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
