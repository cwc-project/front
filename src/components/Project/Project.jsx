import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

const Project = ({ children }) => <div className="project">{children}</div>;

Project.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Project;
