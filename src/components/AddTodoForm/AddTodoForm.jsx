import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, Button } from 'reactstrap';
import { Plus } from 'react-feather';
import './AddTodoForm.css';

const AddTodoForm = () => {
  const todoTitle = React.createRef();

  return (
    <div className="add-todo">
      <Form
        onSubmit={e => {
          e.preventDefault();
          console.log(todoTitle.current.value);
          todoTitle.current.value = '';
        }}
        className="add-todo_form"
        // inline
      >
        <Input
          className="add-todo_input"
          placeholder="New task"
          innerRef={todoTitle}
          autoFocus
        />
        <Button color="primary" className="add-todo_btn">
          <Plus />
        </Button>
      </Form>
    </div>
  );
};

export default AddTodoForm;
