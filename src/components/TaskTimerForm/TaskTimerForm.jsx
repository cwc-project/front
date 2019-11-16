import React, { PureComponent } from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  // Watch,
  // Calendar,
  // X,
  Check,
  Clock,
} from 'react-feather';
import {
  ListGroupItem,
  // Form,
  Input,
  // InputGroup,
  // InputGroupAddon,
  // InputGroupText,
  Button,
} from 'reactstrap';
import DatePicker from 'react-datepicker';
// import { addYears } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

class TaskTimerForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onReset = () => {
    const { toggleTask } = this.props;
    toggleTask();
  };

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    // const { toggleTask } = this.props;
    const { startDate } = this.state;

    return (
      <ListGroupItem tag="div">
        <Button color="danger" onClick={this.onReset}>
          <Clock />
          &nbsp; Reset
        </Button>
        <DatePicker
          selected={startDate}
          onChange={this.handleChange}
          dateFormat="MMMM d, yyyy h:mm aa"
          minDate={new Date()}
          // maxDate={addYears(new Date(), 5)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={60}
          customInput={<Input />}
          // withPortal
          // inline
          // showTimeInput
          // isClearable
        />

        <Button color="light">
          <Check />
        </Button>
        {/* <Button color="light" onClick={toggleTask}>
          <X />
        </Button> */}
      </ListGroupItem>
    );
  }
}

TaskTimerForm.propTypes = {
  toggleTask: PropTypes.func.isRequired,
};

export default TaskTimerForm;

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
