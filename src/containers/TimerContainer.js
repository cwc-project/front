import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Clock } from 'react-feather';
import { Button } from 'reactstrap';
import { addYears, setHours, setMinutes } from 'date-fns';

import TimerModal from '../components/TimerModal';

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
    // const { secRemain } = this.state;
    // console.log('UPDATE', secRemain);

    // if (secRemain !== 0) {
    this.interval = setInterval(() => {
      console.log('tick');
      this.elapsedTimeCounter();
    }, 1000);
    // }
    // if (secRemain === 0) {
    //   clearInterval(this.interval);
    // }
  };

  elapsedTimeCounter = () => {
    const { deadline } = this.props;
    const secRemain = Math.floor((deadline.getTime() - Date.now()) / 1000);
    console.log(secRemain);
    if (secRemain < 0) {
      clearInterval(this.interval);
      return;
    }
    this.setState({ secRemain });
  };

  toggleModal = () =>
    this.setState(prevState => ({ modal: !prevState.modal, date: new Date() }));

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
        <Button color="light" onClick={this.toggleModal}>
          <Clock />
        </Button>
        <TimerModal
          modal={modal}
          date={date}
          invalidDate={invalidDate}
          secRemain={secRemain}
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
