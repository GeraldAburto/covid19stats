import React from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, ListGroup, Badge, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
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
                    .map(({
                      country, cases: { total }, population, time,
                    }) => (
                      <ListGroup.Item key={country}>
                        <Row>
                          <Col sm={12}><Link to={`country/${country}`}>{ country }</Link></Col>
                          { population && (
                          <Col sm={6}>
                            <Badge variant="secondary">
                              {`Population: ${population}`}
                            </Badge>
                          </Col>
                          )}
                          { total && (
                          <Col sm={6}>
                            <Badge variant="warning">
                              {`Total cases: ${total}`}
                            </Badge>
                          </Col>
                          )}
                          { time && (
                          <Col sm={12}>
                            <Badge variant="info">
                              {`Last update: ${moment(time).format('LLL')}`}
                            </Badge>
                          </Col>
                          )}
                        </Row>
                      </ListGroup.Item>
                    ))
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
