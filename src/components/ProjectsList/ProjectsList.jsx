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

export default function ProjectsList({ projects }) {
  return (
    <Form className="projects-list">
      <InputGroup>
        <Badge className="projects-badge">{projects.length}</Badge>

        <Input className="projects-select" type="select" name="select">
          {projects.map(project => (
            <option key={project.id}>{project.title}</option>
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
}

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
};
