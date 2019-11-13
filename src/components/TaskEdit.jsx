import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Save, Trash2 } from 'react-feather';
import { ListGroupItem, Form, Input, Button } from 'reactstrap';
// использование встроенных стилей bootstrap
// const bsUtilClasses = {
// footer: ['mt-5'],
// hr: ['w-75'],
// copy: ['text-muted', 'text-center', 'mt-4'],
// };
// const footer = classNames(bsUtilClasses.footer);
// const hr = classNames(bsUtilClasses.hr);
// const copy = classNames(bsUtilClasses.copy);

const TaskEdit = ({ title }) => (
  <ListGroupItem tag="div">
    <Form>
      <Button color="danger" type="button">
        <Trash2 />
      </Button>
      <Input defaultValue={title} autoFocus />
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
