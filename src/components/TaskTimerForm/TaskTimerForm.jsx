import React, { PureComponent } from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
// import {
// Watch,
// Calendar,
// X,
// Check,
// Clock,
// } from 'react-feather';
import {
  Input,
  // InputGroup,
  // InputGroupAddon,
  // InputGroupText,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
// import { addYears } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './TaskTimerForm.css';

class TimerModal extends PureComponent {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      modal: true,
    };
  }

  onReset = () => {
    const { toggleTask } = this.props;
    toggleTask();
  };

  toggleModal = () => this.setState(prevState => ({ modal: !prevState.modal }));

  timeSelect = date => this.setState({ date });

  render() {
    // const { toggleTask } = this.props;
    const { date, modal } = this.state;

    return (
      <Modal isOpen={modal}>
        <ModalHeader toggle={this.toggleModal}>Title tiel</ModalHeader>
        <ModalBody>
          <DatePicker
            selected={date}
            onChange={this.timeSelect}
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={new Date()}
            // maxDate={addYears(new Date(), 5)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            customInput={<Input className="bbb" />}
            calendarClassName="aaa"
          />
        </ModalBody>
        <ModalFooter>
          <Button>Cances</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

TimerModal.propTypes = {
  toggleTask: PropTypes.func.isRequired,
};

export default TimerModal;

// // <Button color="light">
// //   <Check />
// // </Button>
// <Button color="light" onClick={toggleTask}>
//   <X />
// </Button> */}
// </ListGroupItem>
/* <Form onSubmit={e => e.preventDefault()} inline>
        <InputGroup>
          <Input type="number" min="0" max="23" name="hours" />
          <Input type="number" min="0" max="59" name="minutes" />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <Watch />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <Input type="number" min="1" max="31" name="day" />
          <Input type="number" min="1" max="12" name="month" />
          <Input type="number" min="2019" max="12" name="month" />
          <InputGroupAddon addonType="append">
            <InputGroupText>
              <Watch />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <Button color="light">
          <Check />
        </Button>
        <Button color="light" onClick={toggleTask}>
          <X />
        </Button>
      </Form> */

// <ListGroupItem tag="div">
//   <Button color="danger" onClick={this.onReset}>
//     <Clock />
//     &nbsp; Reset
//   </Button>
