import React from 'react';

import PropTypes from 'prop-types';
import Nav from '../components/layout/Nav.jsx';
import Footer from '../components/layout/Footer.jsx';
import NewsStore from '../stores/newsStore';
import * as NewsActions from '../actions/newsAction';
import Dropdown from '../components/Dropdown.jsx';
import Articles from '../components/Articles.jsx';

/**
 * Headlines React Component
 */
class Headlines extends React.Component {
  constructor() {
    super();
    this.api = NewsStore.getArticles();
    this.state = {
      articles: this.api,
      name: 'articles',
    };
    this.article = this.getArticle.bind(this);
    this.sortsBy = [];
    this.name = '';
    this.id = '';
    this.change = this.onChange.bind(this);
  }
  // componentWillMount - Runs when component is loaded
  componentWillMount() {
    const { location } = this.props;
    const { query } = location;
    const sorts = query.sorts.split(',');
    this.sortsBy = sorts.map(sort => sort);
    this.name = query.name;
    this.id = query.id;
    NewsStore.on('changes', this.article);
    NewsActions.getArticle(query.id, sorts[0]);
  }
  // componentWillUnMount - Runs when component is unloaded(changed)
  componentWillUnmount() {
    NewsStore.removeListener('changes', this.article);
  }
  // onChange - Runs when onChange event is called in select field
  onChange(event) {
    const value = event.target.value;
    NewsActions.getArticle(this.id, value);
  }
  // getArticle - Sets state of article
  getArticle() {
    this.setState({
      articles: NewsStore.getArticles(),
    });
  }
  render() {
    // maps through sortsBy array and passes props to dropdown component
    const sorted = this.sortsBy
      .map((sort, index) => <Dropdown key={index} value={sort} text={sort} />);
    // maps through articles array and passes props to Articles component
    const singleArticles = this.state.articles
      .map(article => <Articles key={article.publishedAt} {...article} />);
    return (
      <div>
        <Nav />
        <div className="container" id={this.state.name}>
          <div className="row">
            <div className="col m8">
              <h1>{this.name}</h1>
            </div>
            <div className="col m4">
              <select
                className="browser-default input-field"
                onChange={this.change} >
                {sorted}
              </select>
            </div>
          </div>
          <div className="row">
            {singleArticles}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
// sets default propstype
Headlines.defaultProps = {
  location: {},
};

Headlines.propTypes = {
  location: PropTypes.object,
};

export default Headlines;
