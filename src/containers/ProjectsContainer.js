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
// первым аргументом передается state, вторым - ownProps
const mapStateToProps = ({ projects, user, fetch }, { history }) => ({
  projectsList: projects.projectsList,
  projectsAmount: projects.projectsAmount,
  loading: fetch.loading.projects,
  authToken: user.authToken,
  history,
});

const mergeProps = (stateProps, dispatchProps) => {
  const {
    projectsList,
    projectsAmount,
    loading,
    authToken,
    history,
  } = stateProps;
  const { dispatch } = dispatchProps;
  return {
    projectsList,
    projectsAmount,
    loading,
    history,
    toggleModal: () => dispatch(toggleModal()),
    getProjects: () => dispatch(getProjects(authToken)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ProjectsContainer);
