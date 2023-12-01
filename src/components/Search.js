import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (event) => {
    if (this.state.search === null) {
    if (event.key === 'Enter') { 
      this.props.searchMovies(this.state.search, this.state.type);
    } 
    }
  };

  handleChangeChecked = (event) => {
    this.setState(() => ({type: event.target.dataset.type}), () => {this.props.searchMovies(this.state.search, this.state.type)} );
  };



  
  render() {
    const { search} = this.state;
    return (
      <div className="input-field col s12">
        <input
          id="search"
          type="text"
          class="validate"
          value={search}
          onChange={(e) => this.setState({ search: e.target.value })}
          onKeyDown={this.handleKey}
        />
        <div class="checkbox-list">
          <label>
            <input
              disabled={this.state.search === ''}
              type="checkbox"
              name="check1" 
              data-type="all"
              onChange={this.handleChangeChecked}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              disabled={this.state.search === ''}
              type="checkbox"
              name="check2"
              data-type="movie"
              onChange={this.handleChangeChecked}
              checked={this.state.type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              disabled={this.state.search === ''}
              type="checkbox"
              name="check3"
              data-type="series"
              onChange={this.handleChangeChecked}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
        <button 
          disabled={this.state.search === ''}
          class="btn-large waves-effect waves-light"
          onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
        >
          Search
        </button>
        <label for="search">Search</label>
      </div>
    );
  }
}

export { Search };
