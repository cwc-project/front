import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';

import {
  Input,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
// import { addYears } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import './TimerModal.css';

const TimerModal = ({
  modal,
  toggleModal,
  date,
  timePick,
  minDate,
  maxDate,
  minTime,
  maxTime,
}) => (
  <Modal isOpen={modal}>
    <ModalHeader toggle={toggleModal}>Set deadline for your task!</ModalHeader>
    <ModalBody>
      <DatePicker
        selected={date}
        onChange={timePick}
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate={minDate} // + 15min
        maxDate={maxDate}
        minTime={minTime}
        maxTime={maxTime}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        customInput={<Input className="timer_input" />}
        calendarClassName="timer_datepicker"
      />
    </ModalBody>
    <ModalFooter>
      <Button onClick={toggleModal}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

TimerModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.number.isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
  minTime: PropTypes.instanceOf(Date).isRequired,
  maxTime: PropTypes.instanceOf(Date).isRequired,
  timePick: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
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
