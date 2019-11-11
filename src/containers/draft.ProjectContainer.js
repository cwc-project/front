import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Project from '../components/Project';
import { getProject, toggleModalProjAdd, addTodo } from '../actions';

class ProjectContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.getProject = props.getProject;
  }

  componentDidMount() {
    const { match } = this.props;
    this.getProject(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match.params.id !== prevProps.match.params.id) {
      this.getProject(match.params.id);
    }
  }

  render() {
    return <Project {...this.props} />;
  }
}

ProjectContainer.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    dateAdded: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]).isRequired,
    // todos: PropTypes.array.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  getProject: PropTypes.func.isRequired,
  toggleModalProjAdd: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};
// первым аргументом передается state, вторым - ownProps
const mapStateToProps = ({ projects, user, fetch, errors }, { match }) => ({
  loading: fetch.loading.project,
  projectErr: errors.err.project,
  authToken: user.authToken,
  project: projects.project,
  match,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { loading, projectErr, authToken, project, match } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    project,
    loading,
    projectErr,
    match,
    getProject: id => dispatch(getProject(id, authToken)),
    toggleModalProjAdd: () => dispatch(toggleModalProjAdd()),
    addTodo: title => dispatch(addTodo(title, project.id, authToken)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ProjectContainer);
