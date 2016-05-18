import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Overwatch' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return(
      <div className="search-container">
        <input value={this.state.term} onChange={e => this.onInputChange(e.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
