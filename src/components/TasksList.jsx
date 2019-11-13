import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';

import TaskContainer from '../containers/TaskConatainer';

// использование встроенных стилей bootstrap
// const bsUtilClasses = {
// footer: ['mt-5'],
// hr: ['w-75'],
// copy: ['text-muted', 'text-center', 'mt-4'],
// };
// const footer = classNames(bsUtilClasses.footer);
// const hr = classNames(bsUtilClasses.hr);
// const copy = classNames(bsUtilClasses.copy);

const TasksList = ({ tasks }) => (
  <div>
    {tasks.map(task => (
      <TaskContainer key={task.id} {...task} />
    ))}
  </div>
);

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TasksList;
