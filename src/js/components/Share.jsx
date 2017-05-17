import React, { Component } from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import PropTypes from 'prop-types';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
class Share extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const shareUrl = this.props.share;
    const title = this.props.title;
    return (
      <div className="row">
        <div className="col s2 m2 l2">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="col s2 m2 l2">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <div className="col s2 m2 l2">
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon size={32} round />
          </GooglePlusShareButton>
        </div>
        <div className="col s2 m2 l2">
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
      </div>
    );
  }
}
// Set Default Props
Share.defaultProps = {
  share: '',
  title: '',
};
// Set Props
Share.propTypes = {
  share: PropTypes.string,
  title: PropTypes.string,
};

export default Share;
