import React from 'react';
import { Clock } from 'react-feather';
import { Button } from 'reactstrap';
import './TimerBtn.css';

const TimerBtn = ({ ...props }) => (
  <Button color="light" className="timer-btn" {...props}>
    <Clock />
  </Button>
);

export default TimerBtn;
