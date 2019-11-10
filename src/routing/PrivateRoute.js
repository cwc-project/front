import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (loggedIn) {
        return <Component {...props} />;
      }
      return <Redirect to="/" />;
    }}
  />
);

const mapStateToProps = ({ user }) => ({ loggedIn: user.loggedIn });

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  loggedIn: PropTypes.bool.isRequired,
};
