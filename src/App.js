import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import GreetingContainer from './containers/GreetingContainer';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function App() {
  return (
    <Fragment>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </Fragment>
  );
}
