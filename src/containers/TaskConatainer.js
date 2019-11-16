import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { TASK, TASK_EDIT_FORM, TASK_TIMER_FORM } from '../constants';
import Task from '../components/Task';
import TaskEdit from '../components/TaskEdit';
import TaskTimerForm from '../components/TaskTimerForm';

class TaskContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      component: TASK,
    };
  }

  toggleTask = () => this.setState({ component: TASK });

  toggleEditForm = () => this.setState({ component: TASK_EDIT_FORM });

  toggleTimerForm = () => this.setState({ component: TASK_TIMER_FORM });

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
    const { component } = this.state;
    const { title, completed } = this.props;

    const task = (
      <Task
        title={title}
        completed={completed}
        toggleEditForm={this.toggleEditForm}
        toggleTimerForm={this.toggleTimerForm}
        toggleComplete={this.toggleComplete}
        onEdit={this.onEdit}
      />
    );

    switch (component) {
      case TASK:
        return task;

      case TASK_EDIT_FORM:
        return (
          <TaskEdit
            title={title}
            onDelete={this.onDelete}
            toggleTask={this.toggleTask}
            onEdit={this.onEdit}
          />
        );

      case TASK_TIMER_FORM:
        return <TaskTimerForm toggleTask={this.toggleTask} />;

      default:
        return task;
    }
  }

  render() {
    return this.renderTask();
  }
}

TaskContainer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskContainer;
