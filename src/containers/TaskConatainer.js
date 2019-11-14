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

  onEdit = () => this.setState({ edit: true });

  onDelete = () => {
    const { deleteTask, id } = this.props;
    deleteTask(id);
  };

  renderTask() {
    const { edit } = this.state;
    const { title } = this.props;
    if (edit) return <TaskEdit title={title} onDelete={this.onDelete} />;
    return <Task title={title} onEdit={this.onEdit} />;
  }

  render() {
    return this.renderTask();
  }
}

TaskContainer.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskContainer;
