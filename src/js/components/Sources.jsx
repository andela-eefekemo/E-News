import React from 'react';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

// Sources Component
class Sources extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuery = this.handleQueryValue.bind(this);
  }
  handleQueryValue(href) {
    browserHistory.push(href);
  }
  render() {
    const { name, description, id, sortBysAvailable } = this.props;
    const link = `/headlines?name=${name}&id=${id}&sorts=${sortBysAvailable}`;
    return (
      <div className="col l3 m4 s12">
        <h5>{name}</h5>
        <p>{description}</p>
        <button
          className="btn btn-default"
          onClick={this.handleQuery(link)} >
          More Info
        </button>
      </div>
    );
  }
}

// Set default Props
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
