import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'reactstrap';
import ProjectMenuContainer from '../containers/ProjectMenuContainer';

class Project extends PureComponent {
  componentDidMount() {
    // запрос project info + todos
  }

  render() {
    return (
      <Card>
        <ProjectMenuContainer />
      </Card>
    );
  }
}

export default Project;
