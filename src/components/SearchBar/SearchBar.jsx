import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import SearchContext from '../../contexts/SearchContext';

const SearchBar = withRouter(({ match, history }) => {
  const { path } = match;

  const handleOnChange = (text, setSearch) => {
    setSearch(text);
    if (path.includes('country')) history.push('/');
  };

  return (
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
              onChange={({ target: { value } }) => handleOnChange(value, setSearch)}
              autoFocus={search}
              value={search}
            />
          </InputGroup>
        )
      }
    </SearchContext.Consumer>
  );
});

export default SearchBar;
