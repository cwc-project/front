import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Edit2 } from 'react-feather';
import { ListGroupItem, ListGroupItemHeading, Button } from 'reactstrap';
import './Task.css';
// использование встроенных стилей bootstrap
// const bsUtilClasses = {
// footer: ['mt-5'],
// hr: ['w-75'],
// copy: ['text-muted', 'text-center', 'mt-4'],
// };
// const footer = classNames(bsUtilClasses.footer);
// const hr = classNames(bsUtilClasses.hr);
// const copy = classNames(bsUtilClasses.copy);

const Task = ({ title, onEdit }) => (
  <ListGroupItem tag="div">
    <div className="d-flex justify-content-between align-items-center">
      <ListGroupItemHeading>{title}</ListGroupItemHeading>
      <Button color="light" className="ml-1" onClick={onEdit}>
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
