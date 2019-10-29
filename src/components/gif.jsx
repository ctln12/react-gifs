import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const { sourceId } = this.props;
    const src = `http://giphygifs.s3.amazonaws.com/media/${sourceId}/giphy.gif`;
    return (
        <img className="gif" src={src} />
    );
  }
}

export default Gif;
