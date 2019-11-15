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

const TaskEdit = ({ title, toggleForm, onDelete, onEdit }) => {
  const taskInput = React.createRef();
  return (
    <ListGroupItem tag="div">
      <Form className={form} onSubmit={e => e.preventDefault()}>
        <Button color="danger" type="button" onClick={onDelete}>
          <Trash2 />
        </Button>
        <Input
          className="task-edit_input"
          defaultValue={title}
          innerRef={taskInput}
          autoFocus
        />
        <Button
          color="light"
          type="button"
          onClick={() => {
            const value = taskInput.current.value.trim();
            if (value && value !== title) {
              onEdit({ title: value });
            }
            toggleForm();
          }}
        >
          <Save />
        </Button>
      </Form>
    </ListGroupItem>
  );
};

TaskEdit.propTypes = {
  title: PropTypes.string.isRequired,
  toggleForm: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskEdit;
