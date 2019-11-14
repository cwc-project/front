import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Save, Trash2 } from 'react-feather';
import { ListGroupItem, Form, Input, Button } from 'reactstrap';
import './TaskEdit.css';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  form: ['d-flex', 'align-items-center'],
};
const form = classNames(bsUtilClasses.form);

const TaskEdit = ({ title }) => (
  <ListGroupItem tag="div">
    <Form className={form}>
      <Button color="danger" type="button">
        <Trash2 />
      </Button>
      <Input className="task-edit_input" defaultValue={title} autoFocus />
      <Button color="light" type="button">
        <Save />
      </Button>
    </Form>
  </ListGroupItem>
);

TaskEdit.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskEdit;
