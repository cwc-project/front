import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

const Project = ({ children }) => <div className="project">{children}</div>;
// т.к. children стабильное св-во, которое не изменятся, необходимости в memo нет
Project.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Project;
