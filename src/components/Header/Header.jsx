import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  LogIn,
  // LogOut
} from 'react-feather';
import {
  Button,
  // ButtonDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from 'reactstrap';
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

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      onToggle,
      loggedIn,
      // userName
    } = this.props;
    const logBtn = !loggedIn ? (
      <Button
        color="link"
        className="text-decoration-none"
        onClick={() => onToggle()}
      >
        Log in&nbsp;
        <LogIn />
      </Button>
    ) : (
      <Button>userName</Button>
    );
    return (
      <header className={header}>
        <h5 className="font-weight-normal mb-0">CWC-project v. 2.0</h5>
        {logBtn}
      </header>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  // userName: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
};
