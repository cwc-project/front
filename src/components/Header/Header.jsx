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
    'mb-5',
    'py-3',
    'px-5',
  ],
};
const header = classNames(bsUtilClasses.header, 'header');

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    const { dropdownOpen } = this.state;
    this.setState({ dropdownOpen: !dropdownOpen });
  };

  render() {
    const { onToggle, loggedIn, userName, onLogout } = this.props;
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
        <DropdownToggle color="link" className="text-decoration-none" caret>
          {userName}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={onLogout}>
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
  onLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
};

Header.defaultProps = {
  userName: 'user_name',
};

export default Header;
