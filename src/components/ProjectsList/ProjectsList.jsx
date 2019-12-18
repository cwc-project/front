import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ChevronsRight } from 'react-feather';
import {
  Form,
  Input,
  Badge,
  InputGroup,
  InputGroupAddon,
  Button,
} from 'reactstrap';
import './ProjectsList.css';
import { gotoProject } from '../../actions';
import Wrapper600 from '../Wrapper600';

// компонент, т.к. нет необходимости использовать state redux
const ProjectsList = ({ projectsList, projectsAmount, history }) => {
  const onSubmit = e => {
    e.preventDefault();
    gotoProject(history, e.target.select.value);
  };

  return (
    <Wrapper600>
      <Form className="projects-list" onSubmit={onSubmit}>
        <InputGroup>
          <Badge className="projects-badge">{projectsAmount}</Badge>
          <Input className="projects-select" type="select" name="select">
            {projectsList.map(({ id, title }) => (
              <option key={id} value={id}>
                {title}
              </option>
            ))}
          </Input>
          <InputGroupAddon addonType="append">
            <Button color="primary" type="submit">
              <ChevronsRight />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </Wrapper600>
  );
};

ProjectsList.propTypes = {
  projectsList: PropTypes.array.isRequired,
  projectsAmount: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

export default memo(ProjectsList);
