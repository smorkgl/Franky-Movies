import React, {useState} from 'react';

const Search = (props) => {
  const {searchMovies} = props;

  const [search, setSearch] = useState(''); 
  const [type, setType] = useState('all'); 

  const handleKey = (event) => {
    if (search === null) {
    if (event.key === 'Enter') { 
      searchMovies(search, type);
    } 
    }
  };

  const handleChangeChecked = (event) => {
    setType(event.target.dataset.type)
    searchMovies(search, event.target.dataset.type);

  };

    return (
      <div className="input-field col s12">
        <input
          id="search"
          type="text"
          class="validate"
          value={search}
          onChange={(e) => setSearch( e.target.value )}
          onKeyDown={handleKey}
        />
        <div class="checkbox-list">
          <label>
            <input
              disabled={search === ''}
              type="checkbox"
              name="check1" 
              data-type="all"
              onChange={handleChangeChecked}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              disabled={search === ''}
              type="checkbox"
              name="check2"
              data-type="movie"
              onChange={handleChangeChecked}
              checked={type === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              disabled={search === ''}
              type="checkbox"
              name="check3"
              data-type="series"
              onChange={handleChangeChecked}
              checked={type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
        <button 
          disabled={search === ''}
          class="btn-large waves-effect waves-light"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
        <label for="search">Search</label>
      </div>
    );
  }

export { Search };
