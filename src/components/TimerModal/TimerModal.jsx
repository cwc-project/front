import 'react-datepicker/dist/react-datepicker.min.css'; // Раблтает
import React from 'react';
// import classNames from 'classnames';
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
  // ButtonDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from 'reactstrap';
import { Check, X } from 'react-feather';

import DatePicker from 'react-datepicker';
import './TimerModal.css';

const timerWarning = 'deadline should not be less than 15 minutes, and not exceed 5 years'; // prettier-ignore

const TimerModal = ({
  modal,
  invalidDate,
  date,
  toggleModal,
  setTimer,
  resetTimer,
  timePick,
  minDate,
  maxDate,
  minTime,
  maxTime,
}) => (
  <Modal isOpen={modal}>
    <ModalHeader toggle={toggleModal}>Set deadline for your task!</ModalHeader>
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
        {/* <Button onClick={toggleModal}>Cancel</Button>
   <ButtonDropdown color="primary" isOpen={false}>

     <DropdownToggle color="primary" caret className="timer_set-toggle" />
          <DropdownMenu>
            <DropdownItem header>Advanced options</DropdownItem>
                                <DropdownItem divider />
        <DropdownItem>
              <X />
              Reset timer
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
       */}
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
