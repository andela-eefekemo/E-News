import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  render() {
    const { value, text } = this.props;

    return (
      <option value={value}>{text}</option>
    );
  }
}

Dropdown.defaultProps = {
  value: '',
  text: '',
};

Dropdown.propTypes = {
  value: PropTypes.String,
  text: PropTypes.String,
};

export default Dropdown;
