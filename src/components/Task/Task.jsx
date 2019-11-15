import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Edit2, Square, CheckSquare } from 'react-feather';
import { ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap';
import './Task.css';
// использование встроенных стилей bootstrap
const bsUtilClasses = {
  taskWrapper: ['d-flex', 'justify-content-between', 'align-items-center'],
  taskHeader: ['text-break', 'text-left', 'mb-0', 'w-100'],
  editBtn: ['ml-1'],
  complBtn: ['mr-3', 'shadow-none'],
};
const taskWrapper = classNames(bsUtilClasses.taskWrapper);
const taskHeader = classNames(bsUtilClasses.taskHeader);
const editBtn = classNames(bsUtilClasses.editBtn);
const complBtn = classNames(bsUtilClasses.complBtn);

const Task = ({ title, completed, toggleForm, toggleComplete }) => {
  const task = classNames('task', completed && 'completed');

  return (
    <ListGroupItem tag="div" className={task}>
      <div className={taskWrapper}>
        <Button color="light" className={complBtn} onClick={toggleComplete}>
          {completed ? <CheckSquare /> : <Square />}
        </Button>
        <ListGroupItemHeading className={taskHeader}>
          {title}
        </ListGroupItemHeading>
        <Button color="light" className={editBtn} onClick={toggleForm}>
          <Edit2 />
        </Button>
      </div>
    </ListGroupItem>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default Task;
