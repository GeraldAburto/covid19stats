import React from 'react';
import PropTypes from 'prop-types';
import SearchContext from '../../../../contexts/SearchContext';

const Continent = ({ continent, countries }) => (
  <SearchContext.Consumer>
    {
        ({ search }) => (
          <div>
            <h3>{ continent }</h3>
            <ul>
              {
                countries && countries
                  .filter(({ country }) => country.toLowerCase().includes((search || '').toLocaleLowerCase()))
                  .map((country) => <li>{ country.country }</li>)
              }
            </ul>
          </div>
        )
      }
  </SearchContext.Consumer>
);

Continent.propTypes = {
  continent: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Continent;
