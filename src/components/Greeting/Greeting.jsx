import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container, Button } from 'reactstrap';
import './Greeting.css';
import RegModalContainer from '../../containers/RegModalContainer';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  greeting: ['text-center'],
};
const greeting = classNames(bsUtilClasses.greeting);

export default function Greeting({ onToggle }) {
  return (
    <main>
      <Container className={greeting}>
        <h1 className="heading-greeting">CWC2</h1>
        <div>
          <p>
            Todo based application. Built with ReactJS, NodeJS/Express, MongoDb.
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
      </Container>
    </main>
  );
}

Greeting.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
