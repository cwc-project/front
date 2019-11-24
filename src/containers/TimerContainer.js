import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Clock } from 'react-feather';
import { Button } from 'reactstrap';
import { addYears, setHours, setMinutes } from 'date-fns';

import TimerModal from '../components/TimerModal';
import TimerDisplay from '../components/TimerDisplay/TimerDisplay';

class TimerContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.maxDate = addYears(new Date(), 5).getTime();
    this.state = {
      modal: false,
      date: new Date(),
      invalidDate: false,
      secRemain: 0,
      // overdue: false,
    };
  }

  componentDidMount() {
    const { completed, deadline } = this.props;
    if (!completed && deadline) {
      this.tick();
    }
  }

  componentDidUpdate(prevProps) {
    const { deadline } = this.props;
    if (deadline !== prevProps.deadline) {
      clearInterval(this.interval);
      if (deadline) this.tick();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.interval = setInterval(() => {
      // console.log('tick');
      this.elapsedTimeCounter();
    }, 1000);
  };

  elapsedTimeCounter = () => {
    const { deadline } = this.props;
    const secRemain = Math.floor((deadline.getTime() - Date.now()) / 1000);
    if (secRemain < 0) {
      clearInterval(this.interval);
      return;
    }
    this.setState({ secRemain });
  };

  timerDisplay = () => {
    const { secRemain } = this.state;
    const days = Math.floor(secRemain / (60 * 60 * 24));
    const hours = Math.floor((secRemain % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((secRemain % (60 * 60)) / 60);
    const secondsCount = Math.floor(secRemain % 60);
    const seconds = secondsCount > 9 ? secondsCount : `0${secondsCount}`;

    if (days) return `${days}d ${hours}h`;
    if (hours) return `${hours}h ${minutes}m`;
    return `${minutes}:${seconds}`;
  };

  toggleModal = () => this.setState(prevState => ({ modal: !prevState.modal }));

  setTimer = () => {
    const { onEdit } = this.props;
    const { date } = this.state;
    // if (this.dateValidation(date)) {
    onEdit({ deadline: date });
    this.toggleModal();
    // }
  };

  resetTimer = () => {
    const { onEdit } = this.props;
    onEdit({ deadline: false });
    this.toggleModal();
  };

  dateValidation = date => {
    // deadline д.б. на 15 минут больше текущего времени
    const dateMs = date.getTime(); // для ускорения процесса
    if (dateMs >= Date.now() + 15 * 60 * 1000 || dateMs > this.maxDate) {
      this.setState({ invalidDate: false });
      return true;
    }
    this.setState({ invalidDate: true });
    return false;
  };

  timePick = date => this.setState({ date });

  render() {
    const { modal, date, invalidDate, secRemain } = this.state;
    const { deadline, completed } = this.props;
    // минимальные дата и время ниже используются только для графического
    // оформления react-datepicker
    const now = new Date();
    const check = date.getTime() - Date.now() > (60 * 60 * 24 - 60 * 15) * 1000;
    const minDate = now.setSeconds(15 * 60); // + 15min
    // const maxDate = addYears(new Date(), 5);
    const minTime = check ? setHours(setMinutes(new Date(), 0), 0) : now;
    const maxTime = setHours(setMinutes(new Date(), 45), 23);
    return (
      <>
        {deadline && !completed ? (
          <TimerDisplay
            toggleModal={this.toggleModal}
            timerDisplay={this.timerDisplay()}
            secRemain={secRemain}
          />
        ) : (
          <Button color="light" onClick={this.toggleModal} disabled={completed}>
            <Clock />
          </Button>
        )}
        <TimerModal
          modal={modal}
          date={date}
          invalidDate={invalidDate}
          minDate={minDate}
          maxDate={this.maxDate}
          minTime={minTime}
          maxTime={maxTime}
          toggleModal={this.toggleModal}
          timePick={this.timePick}
          setTimer={this.setTimer}
          resetTimer={this.resetTimer}
        />
      </>
    );
  }
}

TimerContainer.propTypes = {
  onEdit: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  deadline: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.bool])
    .isRequired,
};

export default TimerContainer;
