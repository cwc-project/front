import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import { Card, Spinner } from 'reactstrap';

// import { getProject, toggleModalProjAdd, addTodo } from '../actions';
import * as rsEffectsActions from '../actions/rsEffectsActions';
import * as projectActions from '../actions/projectsActions';
import * as tasksActions from '../actions/tasksActions';
import ProjectMenu from '../components/ProjectMenu';
import ErrorContainer from './ErrorContainer';
import AddTaskForm from '../components/AddTaskForm';
import Wrapper600 from '../components/Wrapper600';

const bsUtilClasses = {
  linkWrap: ['text-left', 'mb-2'],
  link: ['text-decoration-none'],
};
const linkWrap = classNames(bsUtilClasses.linkWrap);
const link = classNames(bsUtilClasses.link);

class ProjectContainer extends PureComponent {
  componentDidMount() {
    const { getProject } = this.props;
    getProject();
  }

  componentDidUpdate(prevProps) {
    const { id, getProject } = this.props;
    if (id !== prevProps.id) {
      getProject();
    }
  }

  render() {
    const {
      loading,
      projectErr,
      project,
      addTask,
      toggleModalProjAdd,
    } = this.props;

    const projectView = !loading ? (
      <>
        <Wrapper600>
          <Card>
            <ProjectMenu
              title={project.title}
              toggleModalProjAdd={toggleModalProjAdd}
            />
            <AddTaskForm addTask={addTask} />
          </Card>
        </Wrapper600>
      </>
    ) : (
      <Spinner color="primary" />
    );

    return (
      <>
        <div className={linkWrap}>
          <Link to="/projects" className={link}>
            <ArrowLeft style={{ width: 'auto', height: '20px' }} />
            &nbsp;projects ...
          </Link>
        </div>
        {!projectErr ? projectView : <ErrorContainer type="project" />}
      </>
    );
  }
}

ProjectContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  projectErr: PropTypes.string,
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
  id: PropTypes.string.isRequired,
  getProject: PropTypes.func.isRequired,
  toggleModalProjAdd: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

ProjectContainer.defaultProps = {
  projectErr: '',
};
// первым аргументом передается state, вторым - ownProps
const mapStateToProps = ({ projects, user, fetch, errors }, { match }) => ({
  loading: fetch.loading.project,
  projectErr: errors.err.project,
  authToken: user.authToken,
  project: projects.project,
  id: match.params.id,
});

const mergeProps = (stateProps, dispatchProps) => {
  const { loading, projectErr, authToken, project, id } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    loading,
    projectErr,
    project,
    id,
    getProject: () => dispatch(projectActions.getProject(id, authToken)),
    toggleModalProjAdd: () => dispatch(rsEffectsActions.toggleModalProjAdd()),
    addTask: title => {
      const titleValue = title.current.value.trim();
      if (!titleValue) return;
      dispatch(tasksActions.addTask(titleValue, project.id, authToken));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ProjectContainer);
