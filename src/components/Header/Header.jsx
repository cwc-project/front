import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LogIn, LogOut } from 'react-feather';
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
  ],
  heading: ['font-weight-normal', 'mb-0'],
  loginBtn: ['text-decoration-none'],
  userBtn: ['pr-0', 'text-decoration-none', 'overflow-hidden', 'text-nowrap'],
  ddCaret: ['pl-1'],
};
const header = classNames(bsUtilClasses.header, 'header');
const heading = classNames(bsUtilClasses.heading);
const loginBtn = classNames(bsUtilClasses.loginBtn);
const userBtn = classNames(bsUtilClasses.userBtn, 'header_user-btn');
const ddCaret = classNames(bsUtilClasses.ddCaret);

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () =>
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));

  render() {
    const { onToggle, loggedIn, userName, logout } = this.props;
    const { dropdownOpen } = this.state;
    const logBtn = !loggedIn ? (
      <Button color="link" className={loginBtn} onClick={() => onToggle()}>
        Log in&nbsp;
        <LogIn />
      </Button>
    ) : (
      <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle}>
        <Button id="caret" color="link" className={userBtn}>
          {userName}
        </Button>
        <DropdownToggle caret color="link" className={ddCaret} />
        <DropdownMenu right>
          <DropdownItem onClick={logout}>
            <LogOut />
            &nbsp; Log out
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
    return (
      <header className={header}>
        <h5 className={heading}>CWC-project v. 2.0</h5>
        {logBtn}
      </header>
    );
  }
}

Header.propTypes = {
  onToggle: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
};

Header.defaultProps = {
  userName: 'user_name',
};

export default Header;
