import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  // Edit2,
  Square,
  CheckSquare,
} from 'react-feather';
import { ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap';
import './Task.css';

import TimerContainer from '../../containers/TimerContainer';
// использование встроенных стилей bootstrap
const bsUtilClasses = {
  taskWrapper: ['d-flex', 'justify-content-between', 'align-items-center'],
  taskHeader: ['text-break', 'text-left', 'mb-0', 'w-100'],
  editBtn: ['ml-1'],
  complBtn: ['mr-3', 'shadow-none'],
};
const taskWrapper = classNames(bsUtilClasses.taskWrapper);
const taskHeader = classNames(bsUtilClasses.taskHeader, 'task_header');
// const editBtn = classNames(bsUtilClasses.editBtn);
const complBtn = classNames(bsUtilClasses.complBtn);

const Task = ({ title, completed, dblTapHandler, toggleComplete }) => {
  const task = classNames('task', completed && 'completed');

  return (
    <ListGroupItem tag="div" className={task}>
      <div className={taskWrapper}>
        <Button color="light" className={complBtn} onClick={toggleComplete}>
          {completed ? <CheckSquare /> : <Square />}
        </Button>
        <ListGroupItemHeading className={taskHeader} onClick={dblTapHandler}>
          {title}
        </ListGroupItemHeading>
        <TimerContainer />
        {/* <Button color="light" className={editBtn} onClick={toggleForm}>
          <Edit2 />
        </Button> */}
      </div>
    </ListGroupItem>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  dblTapHandler: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default Task;
