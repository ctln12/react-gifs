import React from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const App = () => {
  return (
    <div className="app">
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene">
        <GifList />
      </div>
    </div>
  );
};

export default App;
