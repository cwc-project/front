import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { Plus } from 'react-feather';
import { Container, Spinner } from 'reactstrap';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  container: ['text-center'],
};
const container = classNames(bsUtilClasses.container);

export default function Projects(props) {
  const { projects, loading } = props;

  return (
    <div className="text-center">
      {!loading ? (
        <Container className={container}>
          {projects ? <h1>Projects</h1> : <h2>Test</h2>}
        </Container>
      ) : (
        <Spinner color="primary" />
      )}
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
