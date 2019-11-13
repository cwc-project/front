import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'reactstrap';
import { Plus } from 'react-feather';
import './AddTaskForm.css';

import ErrorContainer from '../../containers/ErrorContainer';

const AddTaskForm = ({ addTask }) => {
  const taskTitle = React.createRef();

  return (
    <div className="add-task">
      <Form
        onSubmit={e => {
          e.preventDefault();
          const value = taskTitle.current.value.trim();
          if (value) {
            addTask(value);
            taskTitle.current.value = '';
          }
        }}
        className="add-task_form"
      >
        <Input
          className="add-task_input"
          placeholder="New task"
          innerRef={taskTitle}
          autoFocus
        />
        <Button color="primary" className="add-task_btn">
          <Plus />
        </Button>
      </Form>
      <ErrorContainer type="task" />
    </div>
  );
};

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
