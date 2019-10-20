import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import GreetingContainer from './containers/GreetingContainer';
import Footer from './components/Footer';
import ProjectsContainer from './containers/ProjectsContainer';

export default function App() {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <Route exact path="/projects" component={ProjectsContainer} />
      </Switch>
      <Footer />
    </>
  );
}
