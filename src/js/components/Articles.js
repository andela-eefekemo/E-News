import React from 'react';

const Article = (props) => {
  const { urlToImage, description, title, url } = props;
  return (

      <div className="col s12 m5">
        <div className="card">
          <div className="card-image">
            <img src={urlToImage} alt="Headline" />
            <span className="card-title">{title}</span>
          </div>
          <div className="card-content">
            <p>{description}</p>
          </div>
          <div className="card-action">
            <a href={url} target="_blank">View More</a>
          </div>
        </div>
      </div>
  );
};

export default Article;

