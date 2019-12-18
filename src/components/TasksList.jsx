import React, { memo } from 'react';
import PropTypes from 'prop-types';

import TaskContainer from '../containers/TaskConatainer';

const TasksList = ({ tasks, deleteTask, editTask }) => (
  <div>
    {tasks.map(task => (
      <TaskContainer
        key={task.id}
        {...task}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ))}
  </div>
);

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default memo(TasksList);
