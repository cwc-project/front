import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import { TASK, TASK_EDIT_FORM, TASK_TIMER_FORM } from '../constants';
// import * as rsEffetcsActions from '../actions/rsEffectsActions';
import Task from '../components/Task';
import TaskEditForm from '../components/TaskEditForm';
// import TaskTimerForm from '../components/TaskTimerForm';

class TaskContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
      // modalTimer: false,
    };
  }

  // toggleTask = () => this.setState({ component: TASK });

  // toggleEditForm = () => this.setState({ component: TASK_EDIT_FORM });

  // toggleTimerForm = () => this.setState({ component: TASK_TIMER_FORM });

  toggleEdit = () =>
    this.setState(prevState => ({ editForm: !prevState.editForm }));

  toggleTimer = () =>
    this.setState(prevState => ({ modalTimer: !prevState.modalTimer }));

  onDelete = () => {
    const { deleteTask, id } = this.props;
    deleteTask(id);
  };

  onEdit = taskKey => {
    if (typeof taskKey === 'object') {
      const { editTask, id } = this.props;
      editTask(taskKey, id);
    }
  };

  toggleComplete = () => {
    const { editTask, id, completed } = this.props;
    const taskKey = {
      completed: !completed,
    };
    editTask(taskKey, id);
  };

  renderTask() {
    const { editForm } = this.state;
    const { title, completed } = this.props;
    if (editForm) {
      return (
        <TaskEditForm
          title={title}
          onDelete={this.onDelete}
          toggleEdit={this.toggleEdit}
          onEdit={this.onEdit}
        />
      );
    }

    const task = (
      <Task
        title={title}
        completed={completed}
        // modalTimer={modalTimer}
        // toggleTimer={this.toggleTimer}
        toggleComplete={this.toggleComplete}
        toggleEdit={this.toggleEdit}
        onEdit={this.onEdit}
      />
    );

    return task;
    // switch (component) {
    //   case TASK:
    //     return task;

    //   case TASK_EDIT_FORM:
    //     return (
    //       <TaskEdit
    //         title={title}
    //         onDelete={this.onDelete}
    //         toggleTask={this.toggleTask}
    //         onEdit={this.onEdit}
    //       />
    //     );

    //   case TASK_TIMER_FORM:
    //     return <TaskTimerForm toggleTask={this.toggleTask} />;

    //   default:
    //     return task;
    // }
  }

  render() {
    return this.renderTask();
  }
}

TaskContainer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  // modalTimer: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskContainer;
// const mapStateToProps = ({ rsEffects }) => ({
//   modalTimer: rsEffects.modalTimer,
// });

// const mapDispatchToProps = dispatch => ({
//   toggleModalTimer: () => dispatch(rsEffetcsActions.toggleModalTimer()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TaskContainer);
