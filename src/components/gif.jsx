import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const { selectedGifId } = this.props;
    return (
      <div className="selected-gif">
        <img className="gif" src={`http://giphygifs.s3.amazonaws.com/media/${selectedGifId}/giphy.gif`} alt="gif" />
      </div>
    );
  }
}

export default Gif;
