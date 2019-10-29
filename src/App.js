import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import classNames from 'classnames';

import HeaderContainer from './containers/HeaderContainer';
import GreetingContainer from './containers/GreetingContainer';
import Footer from './components/Footer';
import ProjectsContainer from './containers/ProjectsContainer';
import AddProjectContainer from './containers/AddProjectContainer';
import PageNotFound from './components/PageNotFound';
import PrivateRoute from './routing/PrivateRoute';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  container: ['text-center'],
};
const container = classNames(bsUtilClasses.container);

export default function App() {
  return (
    <>
      <HeaderContainer />
      <Container className={container}>
        <Switch>
          <Route exact path="/" component={GreetingContainer} />
          <PrivateRoute exact path="/projects" component={ProjectsContainer} />
          {/* <Route exact path="/projects" component={ProjectsContainer} /> */}
          <Route component={PageNotFound} />
        </Switch>
        <Route path="/projects" component={AddProjectContainer} />
      </Container>
      <Footer />
    </>
  );
}
