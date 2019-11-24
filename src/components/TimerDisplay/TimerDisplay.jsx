import React from 'react';
import PropTypes from 'prop-types';
import { AlertCircle } from 'react-feather';
import classNames from 'classnames';
import './TimerDisplay.css';

const TimerDisplay = ({ timerDisplay, toggleModal, secRemain }) => {
  const timerDisplayStyle = classNames(
    'timer-display',
    secRemain < 3600 && 'timer-display__warning',
  );

  return (
    <button type="button" className={timerDisplayStyle} onClick={toggleModal}>
      {timerDisplay}
      {secRemain === 0 && <AlertCircle className="timer-display_icon" />}
    </button>
  );
};

TimerDisplay.propTypes = {
  secRemain: PropTypes.number.isRequired,
  timerDisplay: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default TimerDisplay;
