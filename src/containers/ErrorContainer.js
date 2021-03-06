import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  alert: ['overflow-hidden', 'text-truncate', 'mt-2'],
};
const alert = classNames(bsUtilClasses.alert);

const ErrorContainer = props => {
  const { err, type } = props;
  const error = err[type];
  return (
    error && (
      <Alert color="danger" className={alert}>
        {error}
      </Alert>
    )
  );
};

ErrorContainer.propTypes = {
  type: PropTypes.oneOf(['log', 'reg', 'projects', 'project', 'task'])
    .isRequired,
  err: PropTypes.shape({
    log: PropTypes.string.isRequired,
    reg: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ errors }) => ({ err: errors.err });

export default connect(mapStateToProps)(ErrorContainer);
