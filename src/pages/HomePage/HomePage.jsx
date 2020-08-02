import React, { useMemo, useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import Continent from './components/Continent/Continent';
import SearchBar from './components/SearchBar/SearchBar';

const HomePage = () => {
  const [statistics, setStatistics] = useState([]);
  const [showSpinner, setShowsSpinner] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await fetch('https://covid-193.p.rapidapi.com/statistics', {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': '703f1d299amsh57340e340d0bb7fp14836fjsn0413752f70b0',
        },
      });
      const data = await response.json();
      setStatistics(data.response);
    };
    fetchStatistics();
  }, []);

  const continents = useMemo(() => {
    if (!statistics || statistics.length === 0) return {};

    const map = {

    };

    let stats;
    for (let i = 0; i < statistics.length; i += 1) {
      stats = statistics[i];

      if (Object.prototype.hasOwnProperty.call(map, stats.continent)) {
        map[stats.continent].push(stats);
      } else {
        map[stats.continent] = [stats];
      }
    }
    setShowsSpinner(false);
    return map;
  }, [statistics]);

  return (
    <Row>
      <Col sm={12}><SearchBar /></Col>
      <Col sm={12}>
        <Row>
          {
            showSpinner ? (
              <Col sm={12} className="text-center">
                <Spinner animation="border" role="status" size="lg">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Col>
            )
              : continents && Object.keys(continents)
                .map((continent) => (
                  <Continent
                    key={continent}
                    continent={continent}
                    countries={continents[continent]}
                  />
                ))
        }
        </Row>
      </Col>
    </Row>
  );
};

export default HomePage;
