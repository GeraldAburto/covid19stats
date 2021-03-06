import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import {
  Row, Col, Spinner, Card, Badge, Table, Breadcrumb,
} from 'react-bootstrap';
import moment from 'moment';
import SearchBar from '../../components/SearchBar/SearchBar';
import Covid19Service from '../../Covid19Service';

const CountryPage = withRouter(({ history }) => {
  const { country } = useParams();
  const [countryStats, setCountryStats] = useState({});
  const [showSpinner, setShowsSpinner] = useState(true);

  useEffect(() => {
    Covid19Service.getCountry(country)
      .then((response) => {
        if (!response) return history.push('/notfound');

        setCountryStats(response[0]);
        setShowsSpinner(false);
        return {};
      })
      .catch(() => history.push('/error'));
  }, [country, history]);

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
                  <Breadcrumb.Item style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>Home</Breadcrumb.Item>
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
                    <div className="border-bottom">
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
                    </div>
                    <div className="border-bottom">
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
                    </div>
                    <div className="border-bottom" />
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
                    <div className="border-bottom" />
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
                          { moment(countryStats.time).format('MM/DD/YYYY HH:MM') }
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
});

export default CountryPage;
