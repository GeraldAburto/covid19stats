import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from '../contexts/SearchContext';

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch: (text) => setSearch(text) }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchContextProvider;
