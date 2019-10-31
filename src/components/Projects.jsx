import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Plus } from 'react-feather';
import { Spinner, Button } from 'reactstrap';
import ProjectsList from './ProjectsList';
import ErrorContainer from '../containers/ErrorContainer';
// перенести в контейнер ?
// использование встроенных стилей bootstrap
const bsUtilClasses = {
  btn: ['mt-4'],
};
const btn = classNames(bsUtilClasses.btn);

const Projects = ({ projects, loading, toggleModal }) => (
  <>
    {!loading ? (
      <>
        {projects.length > 0 && <ProjectsList projects={projects} />}
        <ErrorContainer type="projects" />
        <Button color="primary" className={btn} onClick={toggleModal}>
          <Plus />
          &nbsp;
          {projects.length ? 'Add new project' : 'Create your first project'}
        </Button>
      </>
    ) : (
      <Spinner color="primary" />
    )}
  </>
);

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Projects;
