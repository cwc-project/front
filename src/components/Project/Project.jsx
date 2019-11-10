import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import { Card } from 'reactstrap';
import './Project.css';

import ProjectMenuContainer from '../../containers/ProjectMenuContainer';
import AddTodoForm from '../AddTodoForm';
import Wrapper600 from '../Wrapper600';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  linkWrap: ['text-left', 'mb-2'],
  link: ['text-decoration-none'],
};
const linkWrap = classNames(bsUtilClasses.linkWrap);
const link = classNames(bsUtilClasses.link);

class Project extends PureComponent {
  componentDidMount() {
    // запрос project info + todos
  }

  render() {
    return (
      <>
        <div className={linkWrap}>
          <Link to="/projects" className={link}>
            <ArrowLeft className="proj-arrow-icon" />
            &nbsp;projects ...
          </Link>
        </div>
        <Wrapper600>
          <Card>
            <ProjectMenuContainer />
            <AddTodoForm />
          </Card>
        </Wrapper600>
      </>
    );
  }
}

export default Project;
