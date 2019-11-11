import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import { Card, Spinner } from 'reactstrap';
import './Project.css';

// import ProjectMenuContainer from '../../containers/ProjectMenuContainer';
import ProjectMenu from '../ProjectMenu';
import ErrorContainer from '../../containers/ErrorContainer';
import AddTodoForm from '../AddTodoForm';
import Wrapper600 from '../Wrapper600';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  linkWrap: ['text-left', 'mb-2'],
  link: ['text-decoration-none'],
};
const linkWrap = classNames(bsUtilClasses.linkWrap);
const link = classNames(bsUtilClasses.link);

const Project = ({ loading, project, toggleModalProjAdd, addTodo }) => (
  // const nodes = error
  // const presention =
  <>
    <div className={linkWrap}>
      <Link to="/projects" className={link}>
        <ArrowLeft className="proj_arrow-icon" />
        &nbsp;projects ...
      </Link>
    </div>
    {!loading ? (
      <>
        <ErrorContainer type="project" />
        <Wrapper600>
          <Card>
            <ProjectMenu {...project} toggleModalProjAdd={toggleModalProjAdd} />
            <AddTodoForm addTodo={addTodo} />
          </Card>
        </Wrapper600>
      </>
    ) : (
      <Spinner color="primary" />
    )}
  </>
);
Project.propTypes = {
  loading: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    dateAdded: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]).isRequired,
    // todos: PropTypes.array.isRequired,
  }).isRequired,
  toggleModalProjAdd: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default Project;
