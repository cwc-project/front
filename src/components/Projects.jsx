import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import { Spinner, Button } from 'reactstrap';
import ProjectsList from './ProjectsList';

export default function Projects(props) {
  const { projects, loading, toggleModal } = props;

  return (
    <>
      {!loading ? (
        <>
          {projects && <ProjectsList projects={projects} />}
          <Button color="primary" className="mt-4" onClick={toggleModal}>
            <Plus />
            &nbsp;
            {projects ? 'Add new project' : 'Create your first project'}
          </Button>
        </>
      ) : (
        <Spinner color="primary" />
      )}
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
