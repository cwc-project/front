import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Spinner } from 'reactstrap';

import * as rsEffectsActions from '../actions/rsEffectsActions';
import * as projectActions from '../actions/projectsActions';
import * as tasksActions from '../actions/tasksActions';
import ProjectMenu from '../components/ProjectMenu';
import ErrorContainer from './ErrorContainer';
import AddTaskForm from '../components/AddTaskForm';
import Wrapper600 from '../components/Wrapper600';
import TasksList from '../components/TasksList';

class ProjectContainer extends PureComponent {
  componentDidMount() {
    const { getProject } = this.props;
    getProject();
  }

  componentDidUpdate(prevProps) {
    const { paramId, getProject } = this.props;
    if (paramId !== prevProps.paramId) {
      getProject();
    }
  }

  render() {
    const {
      loading,
      projectErr,
      project,
      addTask,
      deleteTask,
      editTask,
      toggleModalProjAdd,
    } = this.props;

    const projectView = !loading ? (
      <div>
        <Wrapper600>
          <Card>
            <ProjectMenu
              title={project.title}
              toggleModalProjAdd={toggleModalProjAdd}
            />
            <TasksList
              tasks={project.tasks}
              deleteTask={deleteTask}
              editTask={editTask}
            />
            <AddTaskForm addTask={addTask} />
          </Card>
        </Wrapper600>
      </div>
    ) : (
      <Spinner color="primary" />
    );

    if (!projectErr) return projectView;
    return <ErrorContainer type="project" />;
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
    tasks: PropTypes.array.isRequired,
  }).isRequired,
  paramId: PropTypes.string.isRequired,
  getProject: PropTypes.func.isRequired,
  toggleModalProjAdd: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
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
  paramId: match.params.id,
});

const mergeProps = (
  { loading, projectErr, authToken, project, paramId }, // stateProps
  { dispatch }, // dispatchProps
) => ({
  loading,
  projectErr,
  project,
  paramId,
  getProject: () => dispatch(projectActions.getProject(paramId, authToken)),
  toggleModalProjAdd: () => dispatch(rsEffectsActions.toggleModalProjAdd()),
  addTask: title =>
    dispatch(tasksActions.addTask(title, project.id, authToken)),
  deleteTask: taskId =>
    dispatch(tasksActions.deleteTask(taskId, project.id, authToken)),
  editTask: (taskKey, taskId) =>
    dispatch(tasksActions.editTask(taskKey, taskId, project.id, authToken)),
});

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(ProjectContainer);
