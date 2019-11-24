import 'react-datepicker/dist/react-datepicker.min.css';
import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  Button,
  Form,
  FormFeedback,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import { Check, X } from 'react-feather';

import DatePicker from 'react-datepicker';
import './TimerModal.css';

const timerWarning = 'deadline should not be less than 15 minutes, and not exceed 5 years'; // prettier-ignore

const TimerModal = ({
  modal,
  invalidDate,
  date,
  timerModalClose,
  setTimer,
  resetTimer,
  timePick,
  minDate,
  maxDate,
  minTime,
  maxTime,
}) => (
  <Modal isOpen={modal}>
    <ModalHeader toggle={timerModalClose}>
      Set deadline for your task!
    </ModalHeader>
    <Form onSubmit={e => e.preventDefault()}>
      <ModalBody>
        <DatePicker
          selected={date}
          onChange={timePick}
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={minDate}
          maxDate={maxDate}
          minTime={minTime}
          maxTime={maxTime}
          showTimeSelect
          // showMonthDropdown
          // showYearDropdown
          timeFormat="HH:mm"
          timeIntervals={15}
          customInput={<Input className="timer_input" invalid={invalidDate} />}
          calendarClassName="timer_datepicker"
        />
        <FormFeedback className="d-block">
          {invalidDate && timerWarning}
        </FormFeedback>
      </ModalBody>
      <ModalFooter className="border-0">
        <Button color="danger" onClick={resetTimer}>
          <X />
          Reset timer
        </Button>
        <Button color="primary" outline onClick={setTimer}>
          <Check />
          Set timer
        </Button>
      </ModalFooter>
    </Form>
  </Modal>
);

TimerModal.propTypes = {
  modal: PropTypes.bool.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  invalidDate: PropTypes.bool.isRequired,
  minDate: PropTypes.number.isRequired,
  maxDate: PropTypes.number.isRequired,
  minTime: PropTypes.instanceOf(Date).isRequired,
  maxTime: PropTypes.instanceOf(Date).isRequired,
  timePick: PropTypes.func.isRequired,
  setTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  timerModalClose: PropTypes.func.isRequired,
};

export default TimerModal;
