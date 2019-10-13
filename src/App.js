import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderContainer from './containers/HeaderContainer';
import GreetingContainer from './containers/GreetingContainer';
import Footer from './components/Footer';
import ProjectsContainer from './containers/ProjectsContainer';

export default function App({ loggedIn }) {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect push exact from="/" to="/projects" />
          ) : (
            <GreetingContainer />
          )}
        </Route>
        <Route exact path="/projects" component={ProjectsContainer} />
      </Switch>
      <Footer />
    </>
  );
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};
