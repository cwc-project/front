import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Btn from '../Btn'
import { LogIn } from 'react-feather';
import { Button } from 'reactstrap';
import './Header.css';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  header: [
    'd-flex',
    'justify-content-between',
    'align-items-center',
    'bg-light',
    'border-bottom',
    'shadow-sm',
    'mb-5',
    'py-3',
    'px-5',
  ],
};
const header = classNames(bsUtilClasses.header, 'header');

export default function Header({ onToggle }) {
  return (
    <header className={header}>
      <h5 className="font-weight-normal mb-0">CWC-project v. 2.0</h5>
      <Button
        color="link"
        className="text-decoration-none"
        onClick={() => onToggle()}
      >
        Log in&nbsp;
        <LogIn />
      </Button>
    </header>
  );
}

Header.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
