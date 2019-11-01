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

const Projects = ({ projectsAmount, projectsList, loading, toggleModal }) => (
  <>
    {!loading ? (
      <>
        {projectsAmount > 0 && (
          <ProjectsList
            projectsList={projectsList}
            projectsAmount={projectsAmount}
          />
        )}
        <ErrorContainer type="projects" />
        <Button color="primary" className={btn} onClick={toggleModal}>
          <Plus />
          &nbsp;
          {projectsAmount ? 'Add new project' : 'Create your first project'}
        </Button>
      </>
    ) : (
      <Spinner color="primary" />
    )}
  </>
);

Projects.propTypes = {
  projectsList: PropTypes.array.isRequired,
  projectsAmount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Projects;
