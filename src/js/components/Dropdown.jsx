import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {any} props
 * @returns
 */
const Dropdown = (props) => {
  const { value, text } = props;
  return <option value={value}>{text}</option>;
};

Dropdown.defaultProps = {
  value: '',
  text: '',
};

Dropdown.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
};

export default Dropdown;
