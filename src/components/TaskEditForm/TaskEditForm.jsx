import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Save, Trash2 } from 'react-feather';
import { ListGroupItem, Form, Input, Button } from 'reactstrap';
import './TaskEditForm.css';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  form: ['d-flex', 'align-items-center'],
};
const form = classNames(bsUtilClasses.form);

const TaskEdit = ({ title, toggleEdit, onDelete, onEdit }) => {
  const taskInput = React.createRef();
  return (
    <ListGroupItem tag="div" className="task-edit">
      <Form
        className={form}
        onSubmit={e => {
          e.preventDefault();
          const value = taskInput.current.value.trim();
          if (value && value !== title) {
            onEdit({ title: value });
          }
          toggleEdit();
        }}
      >
        <Button
          color="danger"
          type="button"
          className="task-edit_btn"
          onClick={onDelete}
        >
          <Trash2 />
        </Button>
        <Input
          className="task-edit_input"
          defaultValue={title}
          innerRef={taskInput}
          // autoFocus - автофокус плохо смотриться на мобиле
        />
        <Button color="light" type="submit" className="task-edit_btn">
          <Save />
        </Button>
      </Form>
    </ListGroupItem>
  );
};

TaskEdit.propTypes = {
  title: PropTypes.string.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskEdit;
