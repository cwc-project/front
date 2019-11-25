import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'reactstrap';
import './Greeting.css';

import RegModalContainer from '../../containers/RegModalContainer';

const bsUtilClasses = {
  greeting: ['mt-5'],
  toggleBtn: ['p-0', 'align-baseline'],
};
const greeting = classNames(bsUtilClasses.greeting, 'greeting');
const toggleBtn = classNames(bsUtilClasses.toggleBtn);

class Greeting extends PureComponent {
  componentDidMount() {
    const { history, loggedIn } = this.props;
    if (loggedIn) {
      history.replace('/projects');
    }
    return null;
  }

  render() {
    const { onToggle } = this.props;

    return (
      <main className={greeting}>
        <>
          <h1 className="greeting_heading">CWC2</h1>
          <div>
            <p>
              Todo based application built with MERN stack (MongoDB, ExpressJS,
              ReactJS, NodeJS).
            </p>
            <p>
              For using please&nbsp;
              <Button
                color="link"
                className={toggleBtn}
                onClick={() => onToggle()}
              >
                sign in
              </Button>
              &nbsp;or&nbsp;
              <Button
                color="link"
                className={toggleBtn}
                onClick={() => onToggle('2')}
              >
                register
              </Button>
              .
            </p>
          </div>
          <RegModalContainer />
        </>
      </main>
    );
  }
}

Greeting.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Greeting;

/* <div className="text-left">
              <h6>Info:</h6>
              <ul>
                <li>User registration</li>
                <li>Email notification</li>
                <li>
                  CRUD for projects:
                  <ul>
                    <li>Get Projects</li>
                    <li>Add project</li>
                  </ul>
                </li>
                <li>
                  CRUD for tasks:
                  <ul>
                    <li>Get Tasks</li>
                    <li>Add task</li>
                    <li>Edit task(on doubleClick)</li>
                    <li>Delete task(on doubleClick)</li>
                  </ul>
                </li>
              </ul>
            </div> */
