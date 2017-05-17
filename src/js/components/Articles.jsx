import React from 'react';
import PropTypes from 'prop-types';

import Share from './Share.jsx';

// Article Component
const Article = (props) => {
  const { urlToImage, description, title, url } = props;
  return (

    <div className="col s12 m6 l6 height">
      <div className="card card-panel hoverable">
        <div className="card-image">
          <img src={urlToImage} alt="Headline" />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p className="truncate">{description}</p>
        </div>
        <div className="row">
          <div className="card-action col s6">
            <a href={url} target="_blank" rel="noopener noreferrer">View More</a>
          </div>
          <div className="col s6">
            <Share share={url} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Set Default Props
Article.defaultProps = {
  urlToImage: '',
  description: '',
  title: '',
  url: '',
};
// Set Props
Article.propTypes = {
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Article;

