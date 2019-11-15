import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Task from '../components/Task';
import TaskEdit from '../components/TaskEdit';

class TaskContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  toggleForm = () => this.setState(prevState => ({ edit: !prevState.edit }));

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
    const { edit } = this.state;
    const { title, completed } = this.props;

    if (edit) {
      return (
        <TaskEdit
          title={title}
          onDelete={this.onDelete}
          toggleForm={this.toggleForm}
          onEdit={this.onEdit}
        />
      );
    }

    return (
      <Task
        title={title}
        completed={completed}
        toggleForm={this.toggleForm}
        toggleComplete={this.toggleComplete}
        onEdit={this.onEdit}
      />
    );
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
