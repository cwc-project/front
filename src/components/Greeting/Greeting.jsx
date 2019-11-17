import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'reactstrap';
import './Greeting.css';

import RegModalContainer from '../../containers/RegModalContainer';

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
      <main>
        <>
          <h1 className="heading-greeting">CWC2</h1>
          <Form>
            <Input />
          </Form>
          <div>
            <p>
              Todo based application. Built with ReactJS, NodeJS/Express,
              MongoDb.
            </p>
            <p>
              For using please&nbsp;
              <Button
                color="link"
                className="p-0 align-baseline"
                onClick={() => onToggle()}
              >
                sign in
              </Button>
              &nbsp;or&nbsp;
              <Button
                color="link"
                className="p-0 align-baseline"
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
