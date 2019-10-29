import React, { Component } from 'react';

class SearchBar extends Component {
  onChange = (e) => {
    this.props.onChange(e);
  };

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={e => this.onChange(e)} />
    );
  }
}

export default SearchBar;
