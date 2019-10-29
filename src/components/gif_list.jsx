/* eslint react/prefer-stateless-function: off */

import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  render() {
    const { gifs, selectGif } = this.props;
    return (
      <div className="gif-list">
        {gifs.map((gif) => {
          return (
            <Gif id={gif.id} key={gif.id} sourceId={gif.id} selectGif={selectGif} />
          );
        })}
      </div>
    );
  }
}

export default GifList;
