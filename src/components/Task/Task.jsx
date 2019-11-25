import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Square, CheckSquare } from 'react-feather';
import { ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap';
import './Task.css';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  taskWrapper: ['d-flex', 'justify-content-between', 'align-items-center'],
  taskHeader: ['text-break', 'text-left', 'mb-0', 'w-100'],
};
const taskWrapper = classNames(bsUtilClasses.taskWrapper);
const taskHeader = classNames(bsUtilClasses.taskHeader, 'task_header');

const Task = ({
  children,
  title,
  completed,
  secRemain,
  deadlineString,
  dblTapHandler,
  toggleComplete,
}) => {
  const task = classNames(
    'task',
    completed && 'completed',
    secRemain === 0 && !completed && 'overdue',
  );

  return (
    <ListGroupItem tag="div" className={task}>
      <div className="task_deadline">{deadlineString}</div>
      <div className={taskWrapper}>
        <Button
          color="light"
          className="task_complete-btn"
          onClick={toggleComplete}
        >
          {completed ? <CheckSquare /> : <Square />}
        </Button>
        <ListGroupItemHeading
          className={taskHeader}
          onClick={dblTapHandler}
          title="double click for edit"
        >
          {title}
        </ListGroupItemHeading>
        {children}
      </div>
    </ListGroupItem>
  );
};

Task.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  secRemain: PropTypes.number,
  deadlineString: PropTypes.string,
  dblTapHandler: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  deadlineString: '',
  secRemain: null,
};

export default Task;
