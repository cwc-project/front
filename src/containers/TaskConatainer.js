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

  renderTask() {
    const { edit } = this.state;
    const { title } = this.props;
    if (edit) return <TaskEdit title={title} />;
    return <Task onEdit={this.onEdit} title={title} />;
  }

  render() {
    // const { title } = this.props;
    return this.renderTask();
  }
}

TaskContainer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskContainer;
