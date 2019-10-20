import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import { Spinner, Button } from 'reactstrap';

export default function Projects(props) {
  const { projects, loading } = props;

  return (
    <div className="text-center">
      {!loading ? (
        <>
          {projects ? (
            <Button color="primary">
              <Plus />
              &nbsp;Create your first project
            </Button>
          ) : (
            <h2>Test</h2>
          )}
        </>
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
