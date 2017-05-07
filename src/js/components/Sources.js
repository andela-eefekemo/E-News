import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Sources = (props) => {
  const { name, description, id } = props;
  return (
    <div className="col m4">
      <h5>{name}</h5>
      <p>{description}</p>
      <Link class="btn btn-default" to={`/headlines:&{id}`} >More Info</Link>
    </div>
  );
};

Sources.defaultProps = {
  name: '',
  description: '',
  id: '',
};

Sources.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

export default Sources;
