import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Clock } from 'react-feather';
import { Button } from 'reactstrap';
// import './Timer.css';
// использование встроенных стилей bootstrap
// const bsUtilClasses = {
//   taskWrapper: ['d-flex', 'justify-content-between', 'align-items-center'],
//   taskHeader: ['text-break', 'text-left', 'mb-0', 'w-100'],
//   editBtn: ['ml-1'],
//   complBtn: ['mr-3', 'shadow-none'],
// };
// const taskWrapper = classNames(bsUtilClasses.taskWrapper);
// const taskHeader = classNames(bsUtilClasses.taskHeader);
// const editBtn = classNames(bsUtilClasses.editBtn);
// const complBtn = classNames(bsUtilClasses.complBtn);

const Timer = ({ toggleTimerForm }) => (
  <Button color="light" onClick={toggleTimerForm}>
    <Clock />
  </Button>
);

Timer.propTypes = {
  // title: PropTypes.string.isRequired,
  // completed: PropTypes.bool.isRequired,
  toggleTimerForm: PropTypes.func.isRequired,
  // toggleComplete: PropTypes.func.isRequired,
};

export default Timer;
