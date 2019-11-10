import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper600.css';

const Wrapper600 = ({ children }) => (
  <div className="wrapper600">{children}</div>
);

Wrapper600.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Wrapper600;
