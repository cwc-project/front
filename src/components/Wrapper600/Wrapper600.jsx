import React from 'react';
import PropTypes from 'prop-types';
import './Wrapper600.css';

const Wrapper600 = ({ children }) => (
  <div className="wrapper600">{children}</div>
);

Wrapper600.propTypes = {
  children: PropTypes.object.isRequired,
};
// т.к. children стабильное св-во, которое не изменятся, необходимости в memo нет
export default Wrapper600;
