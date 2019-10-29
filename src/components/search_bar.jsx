import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (e) => {
    this.props.search(e.target.value);
  };

  render() {
    return (
      <input type="text" className="form-control form-search" placeholder="Search GIFs" onChange={e => this.handleChange(e)} />
    );
  }
}

export default SearchBar;
