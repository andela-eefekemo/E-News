import React from 'react';
import PropTypes from 'prop-types';

// Sources Component
/**
 * @class Sources
 * @extends {React.Component}
 */
class Sources extends React.Component {
  handleQueryValue(href) {
    this.context.router.push(href);
  }
  render() {
    const { name, description, id, sortBysAvailable } = this.props;
    const link = `/headlines?name=${name}&id=${id}&sorts=${sortBysAvailable}`;
    return (
      <div className="col s12 m6 l4 ">
        <h5>{name}</h5>
        <p className="truncate">{description}</p>
        <button
          className="btn btn-default"
          onClick={this.handleQueryValue.bind(this, link)}
        >
          View Headlines
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
  sortBysAvailable: []
};

Sources.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  sortBysAvailable: PropTypes.array
};

Sources.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Sources;
