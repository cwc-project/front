import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, Button } from 'reactstrap';
import { Plus } from 'react-feather';

const AddTodoForm = () => (
  <Form
    onSubmit={e => {
      e.preventDefault();
      // console.log(e);
    }}
  >
    <Input placeholder="New task" />
    <Button color="primary">
      <Plus />
    </Button>
  </Form>
);

export default AddTodoForm;
