import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'r655A3RW3xJPwN1GWesC4cAs7mYG8juv';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (error, result) => {
        this.setState({
          gifs: result.data
        });
      });
  };

  render () {
    const { selectedGifId, gifs } = this.state;
    return (
      <div className="app">

        <div className="left-scene">

          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif sourceId={selectedGifId} />
          </div>

        </div>

        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>

      </div>
    );
  }
}

export default App;
