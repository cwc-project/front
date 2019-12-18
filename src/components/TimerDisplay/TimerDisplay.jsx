import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AlertCircle } from 'react-feather';
import './TimerDisplay.css';

const TimerDisplay = ({ timerDisplay, timerModalOpen, secRemain }) => {
  const timerDisplayStyle = classNames(
    'timer-display',
    secRemain < 3600 && secRemain !== null && 'timer-display__warning',
  );

  return (
    <button
      type="button"
      className={timerDisplayStyle}
      onClick={timerModalOpen}
    >
      {timerDisplay}
      {secRemain === 0 && <AlertCircle className="timer-display_icon" />}
    </button>
  );
};

TimerDisplay.propTypes = {
  secRemain: PropTypes.number,
  timerDisplay: PropTypes.string.isRequired,
  timerModalOpen: PropTypes.func.isRequired,
};

TimerDisplay.defaultProps = {
  secRemain: null,
};

export default memo(TimerDisplay);
