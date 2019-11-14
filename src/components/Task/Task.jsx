import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Edit2 } from 'react-feather';
import { ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap';
import './Task.css';
// использование встроенных стилей bootstrap
const bsUtilClasses = {
  taskWrapper: ['d-flex', 'justify-content-between', 'align-items-center'],
  taskHeader: ['text-break', 'text-left'],
  editBtn: ['ml-1'],
};
const taskWrapper = classNames(bsUtilClasses.taskWrapper);
const taskHeader = classNames(bsUtilClasses.taskHeader);
const editBtn = classNames(bsUtilClasses.editBtn);

const Task = ({ title, onEdit }) => (
  <ListGroupItem tag="div">
    <div className={taskWrapper}>
      <ListGroupItemHeading className={taskHeader}>
        {title}
      </ListGroupItemHeading>
      <Button color="light" className={editBtn} onClick={onEdit}>
        <Edit2 />
      </Button>
    </div>
  </ListGroupItem>
);

Task.propTypes = {
  title: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Task;
