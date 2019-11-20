import React, { PureComponent } from 'react';
import { Clock } from 'react-feather';
import { Button } from 'reactstrap';
import { addYears, setHours, setMinutes } from 'date-fns';

import TimerModal from '../components/TimerModal';

class TimerContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      date: new Date(),
    };
  }

  toggleModal = () => this.setState(prevState => ({ modal: !prevState.modal }));

  timePick = date => this.setState({ date });

  render() {
    const { modal, date } = this.state;
    const now = new Date();
    const check = date - now > (60 * 60 * 24 - 60 * 15) * 1000;
    const minDate = now.setSeconds(15 * 60); // + 15min
    const maxDate = addYears(new Date(), 5);
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
          minDate={minDate}
          maxDate={maxDate}
          minTime={minTime}
          maxTime={maxTime}
          toggleModal={this.toggleModal}
          timePick={this.timePick}
        />
      </>
    );
  }
}

export default TimerContainer;
