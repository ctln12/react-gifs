import React, { Component } from 'react';

class GifList extends Component {
  render() {
    const { gifs } = this.props;
    return (
      <div className="gift-list">
        {gifs.map((gif) => {
          return <img className="gif" key={gif.id} src={`http://giphygifs.s3.amazonaws.com/media/${gif.id}/giphy.gif`} alt="gif" />
        })}
      </div>
    );
  }
}

export default GifList;
