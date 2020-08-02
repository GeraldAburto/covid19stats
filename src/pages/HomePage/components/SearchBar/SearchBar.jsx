import React from 'react';
import SearchContext from '../../../../contexts/SearchContext';

const SearchBar = () => (
  <SearchContext.Consumer>
    {
      ({ setSearch }) => <input type="text" onChange={({ target: { value } }) => setSearch(value)} />
    }
  </SearchContext.Consumer>
);

export default SearchBar;
