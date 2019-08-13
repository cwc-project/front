import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { User, UserPlus } from 'react-feather';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './RegTabs.css';

import RegFormContainer from '../../containers/RegFormContainer';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  navLink: ['text-primary'],
  icons: ['pb-1', 'pl-1'],
};
const icons = classNames(bsUtilClasses.icons);
const navLink = classNames(bsUtilClasses.navLink, 'reg-link');

export default function RegTabs({ activeTab, toggleTab }) {
  const nameFeedback = 'Use at least 1 character for name.';
  const emailFeedback = 'Incorrect email format. Example: example@email.com';
  const passFeedback = 'Password length should be not less than 6 characters. Please use at least one letter and one number.'; // prettier-ignore

  return (
    <div>
      <Nav tabs>
        <NavItem>
          {' '}
          <NavLink
            className={classNames({ active: activeTab === '1' }, navLink)}
            onClick={() => toggleTab('1')}
          >
            Sign In
            <User className={icons} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classNames({ active: activeTab === '2' }, navLink)}
            onClick={() => toggleTab('2')}
          >
            Sign Up
            <UserPlus className={icons} />
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <RegFormContainer id="log" type="log" btnValue="Log in" />
        </TabPane>
        <TabPane tabId="2">
          <RegFormContainer
            id="reg"
            type="reg"
            btnValue="Register"
            validation
            optionFileds="name"
            nameFeedback={nameFeedback}
            emailFeedback={emailFeedback}
            passFeedback={passFeedback}
            // emailInfo={emailInfo}
          />
        </TabPane>
      </TabContent>
      {/* <div className="feedback"></div> */}
    </div>
  );
}

RegTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  toggleTab: PropTypes.func.isRequired,
};
