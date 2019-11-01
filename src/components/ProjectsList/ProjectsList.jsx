import React from 'react';
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

const ProjectsList = ({ projectsList, projectsAmount }) => (
  <Form className="projects-list">
    <InputGroup>
      <Badge className="projects-badge">{projectsAmount}</Badge>

      <Input className="projects-select" type="select" name="select">
        {projectsList.map(({ id, title }) => (
          <option key={id}>{title}</option>
        ))}
      </Input>
      <InputGroupAddon addonType="append">
        <Button color="primary">
          <ChevronsRight />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  </Form>
);

ProjectsList.propTypes = {
  projectsList: PropTypes.array.isRequired,
  projectsAmount: PropTypes.number.isRequired,
};

export default ProjectsList;
