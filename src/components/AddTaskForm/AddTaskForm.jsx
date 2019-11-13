import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'reactstrap';
import { Plus } from 'react-feather';
import './AddTaskForm.css';

const AddTaskForm = ({ addTask }) => {
  const taskTitle = React.createRef();

  return (
    <div className="add-task">
      <Form
        onSubmit={e => {
          e.preventDefault();
          addTask(taskTitle);
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
    </div>
  );
};

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
