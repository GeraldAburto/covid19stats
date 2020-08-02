import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchContext from '../../contexts/SearchContext';

const SearchBar = () => (
  <SearchContext.Consumer>
    {
      ({ search, setSearch }) => (
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search by country name"
            aria-label="Search"
            aria-describedby="basic-addon1"
            onChange={({ target: { value } }) => setSearch(value)}
            value={search}
          />
        </InputGroup>
      )
    }
  </SearchContext.Consumer>
);

export default SearchBar;
