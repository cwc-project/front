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

  editToggle = () => this.setState({ edit: true });

  onDelete = () => {
    const { deleteTask, id } = this.props;
    deleteTask(id);
  };

  onEdit = taskKey => {
    if (typeof taskKey === 'object') {
      const { editTask, id } = this.props;
      editTask(taskKey, id);
      this.setState({ edit: false });
    }
  };

  renderTask() {
    const { edit } = this.state;
    const { title } = this.props;
    if (edit) {
      return (
        <TaskEdit title={title} onDelete={this.onDelete} onEdit={this.onEdit} />
      );
    }
    return (
      <Task title={title} editToggle={this.editToggle} onEdit={this.onEdit} />
    );
  }

  render() {
    return this.renderTask();
  }
}

TaskContainer.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskContainer;
