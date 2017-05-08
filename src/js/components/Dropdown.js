import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
  const { value, text } = props;
  return (
    <option value={value}>{text}</option>
  );
};

Dropdown.defaultProps = {
  value: '',
  text: '',
};

Dropdown.propTypes = {
  value: PropTypes.String,
  text: PropTypes.String,
};

export default Dropdown;
