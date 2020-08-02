import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchContext from '../../../../contexts/SearchContext';

const Continent = ({ continent, countries }) => (
  <SearchContext.Consumer>
    {
        ({ search }) => (
          <Col sm={12} md={6} lg={4} className="mb-3">
            <Card>
              <Card.Header>{ continent }</Card.Header>
              <ListGroup>
                {
                  countries && countries
                    .filter(({ country }) => country.toLowerCase().includes((search || '').toLocaleLowerCase()))
                    .map((country) => <ListGroup.Item><Link to={`/${country.country}`}>{ country.country }</Link></ListGroup.Item>)
                }
              </ListGroup>
            </Card>
          </Col>
        )
      }
  </SearchContext.Consumer>
);

Continent.propTypes = {
  continent: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Continent;
