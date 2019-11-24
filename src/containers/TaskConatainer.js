import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Task from '../components/Task';
import TaskEditForm from '../components/TaskEditForm';
import TimerContainer from './TimerContainer';

class TaskContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
      secRemain: null,
    };
    this.tappedTwice = false;
  }

  timerUpdate = secRemain => {
    this.setState({ secRemain });
  };

  dblTapHandler = event => {
    event.preventDefault();
    if (!this.tappedTwice) {
      this.tappedTwice = true;
      setTimeout(() => {
        this.tappedTwice = false;
      }, 300);
      return;
    }
    this.toggleEdit();
  };

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

  deadlineString() {
    const { deadline } = this.props;
    if (deadline) {
      const arr = deadline.toString().split(':');
      return `${arr[0]}:${arr[1]}`;
    }
    return '';
  }

  renderTask() {
    const { editForm, secRemain } = this.state;
    const { title, completed, deadline } = this.props;
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
        deadline={deadline}
        secRemain={secRemain}
        onEdit={this.onEdit}
        toggleComplete={this.toggleComplete}
        dblTapHandler={this.dblTapHandler}
        deadlineString={this.deadlineString()}
      >
        <TimerContainer
          onEdit={this.onEdit}
          completed={completed}
          deadline={deadline}
          secRemain={secRemain}
          timerUpdate={this.timerUpdate}
        />
      </Task>
    );

    return task;
  }

  render() {
    return this.renderTask();
  }
}

TaskContainer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deadline: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.bool])
    .isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskContainer;
