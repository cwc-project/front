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

const Projects = ({
  projectsAmount,
  projectsList,
  loading,
  toggleModalProjAdd,
  history,
}) => {
  if (loading) return <Spinner color="primary" />;

  return (
    <>
      {projectsAmount > 0 && (
        <ProjectsList
          projectsList={projectsList}
          projectsAmount={projectsAmount}
          history={history}
        />
      )}
      <ErrorContainer type="projects" />
      <Button color="primary" className={btn} onClick={toggleModalProjAdd}>
        <Plus />
        &nbsp;
        {projectsAmount ? 'Add new project' : 'Create your first project'}
      </Button>
    </>
  );
};

Projects.propTypes = {
  projectsList: PropTypes.array.isRequired,
  projectsAmount: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  toggleModalProjAdd: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default Projects;
