/* eslint jsx-a11y/click-events-have-key-events: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */
/* eslint react/destructuring-assignment: off */

import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectGif(this.props.sourceId);
  };

  render() {
    const src = `http://giphygifs.s3.amazonaws.com/media/${this.props.sourceId}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} alt="gif" />
    );
  }
}

export default Gif;
