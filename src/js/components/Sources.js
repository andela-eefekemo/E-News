import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';


class Sources extends React.Component {
  handleQueryValue(href) {
    browserHistory.push(href);
  }
  render() {
    const { name, description, id, sortBysAvailable } = this.props;
    return (
      <div className="col m4">
        <h5>{name}</h5>
        <p>{description}</p>
        <button className="btn btn-default" onClick={this.handleQueryValue.bind(this, `/headlines?name=${name}&id=${id}&sorts=${sortBysAvailable}`)} >More Info</button>
      </div>
    );
  }
}

Sources.defaultProps = {
  name: '',
  description: '',
  id: '',
  sortBysAvailable: [],
};

Sources.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  sortBysAvailable: PropTypes.array,
};

export default Sources;
