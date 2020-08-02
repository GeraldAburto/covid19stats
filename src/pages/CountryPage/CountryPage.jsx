import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Row, Col, Spinner, Card, Badge, Table, Breadcrumb,
} from 'react-bootstrap';
import moment from 'moment';
import SearchBar from '../../components/SearchBar/SearchBar';
import fetchStatistics from '../../RapidAPI';

const CountryPage = () => {
  const { country } = useParams();
  const [countryStats, setCountryStats] = useState({});
  const [showSpinner, setShowsSpinner] = useState(true);

  useEffect(() => {
    fetchStatistics(country)
      .then(({ response }) => {
        setCountryStats(response[0]);
        setShowsSpinner(false);
      });
  }, [country]);

  return (
    <Row>
      <Col sm={12}><SearchBar /></Col>
      <Col sm={12}>
        {
          showSpinner ? (
            <Col sm={12} className="text-center">
              <Spinner animation="border" role="status" size="lg">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </Col>
          ) : (
            <Row>
              <Col sm={12}>
                <Breadcrumb>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {countryStats.continent}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>{countryStats.country}</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col sm={12}>
                <Card>
                  <Card.Header>
                    {countryStats.country}
                    <Badge variant="info" className="float-right">{countryStats.continent}</Badge>
                  </Card.Header>
                  <Card.Body>
                    <Table borderless responsive>
                      <caption>Cases</caption>
                      <thead>
                        <tr>
                          <th>New</th>
                          <th>Active</th>
                          <th>Critical</th>
                          <th>Recovered</th>
                          <th>Total</th>
                          <th>1M pop</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{countryStats.cases.new}</td>
                          <td>{countryStats.cases.active}</td>
                          <td>{countryStats.cases.critical}</td>
                          <td>{countryStats.cases.recovered}</td>
                          <td>{countryStats.cases['1M_pop']}</td>
                          <td>{countryStats.cases.total}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table borderless responsive>
                      <caption>Deaths</caption>
                      <thead>
                        <tr>
                          <th>New</th>
                          <th>1M pop</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{countryStats.deaths.new}</td>
                          <td>{countryStats.deaths['1M_pop']}</td>
                          <td>{countryStats.deaths.total}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table borderless responsive>
                      <caption>Tests</caption>
                      <thead>
                        <tr>
                          <th>1M pop</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{countryStats.tests['1M_pop']}</td>
                          <td>{countryStats.tests.total}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Row>
                      <Col sm={12} md={6}>
                        <p>
                          Population:
                          {' '}
                          { countryStats.population }
                        </p>
                      </Col>
                      <Col sm={12} md={6}>
                        <p>
                          Last update:
                          {' '}
                          { moment(countryStats.time).format('LLL') }
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )
      }
      </Col>
    </Row>
  );
};

export default CountryPage;
