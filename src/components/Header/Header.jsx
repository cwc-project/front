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
  userBtn: ['pr-0', 'text-decoration-none', 'overflow-hidden', 'text-nowrap'],
};
const header = classNames(bsUtilClasses.header, 'header');
const userBtn = classNames(bsUtilClasses.userBtn, 'user-btn');

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
      <Button
        color="link"
        className="text-decoration-none"
        onClick={() => onToggle()}
      >
        Log in&nbsp;
        <LogIn />
      </Button>
    ) : (
      <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle}>
        <Button id="caret" color="link" className={userBtn}>
          {userName}
        </Button>
        <DropdownToggle caret color="link" className="pl-1" />
        {/* <DropdownToggle color="link" className="ttt" caret>
          {userName}
        </DropdownToggle> */}
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
        <h5 className="font-weight-normal mb-0">CWC-project v. 2.0</h5>
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
