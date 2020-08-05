import React, { useMemo, useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Continent from './components/Continent/Continent';
import SearchBar from '../../components/SearchBar/SearchBar';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import fetchStatistics from '../../RapidAPI';
import SearchContext from '../../contexts/SearchContext';

const HomePage = withRouter(({ history }) => {
  const [statistics, setStatistics] = useState([]);
  const [showSpinner, setShowsSpinner] = useState(true);

  useEffect(() => {
    fetchStatistics()
      .then(({ response }) => setStatistics(response))
      .catch(() => history.push('/error'));
  }, [history]);

  const continents = useMemo(() => {
    if (!statistics || statistics.length === 0) return {};

    const map = {

    };

    let stats;
    for (let i = 0; i < statistics.length; i += 1) {
      stats = statistics[i];

      if (stats.continent === null) stats.continent = 'Unknown';

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
        <SearchContext.Consumer>
          {
            ({ search }) => (
              <Row>
                {
                  showSpinner ? (
                    <Col sm={12} className="text-center">
                      <Spinner animation="border" role="status" size="lg">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    </Col>
                  )
                    : continents && (
                      Object.keys(continents).filter((continent) => continents[continent].some(({ country }) => country.toLowerCase().includes((search || '').toLocaleLowerCase()))).length > 0
                        ? Object.keys(continents)
                          .map((continent) => (
                            <Continent
                              key={continent}
                              continent={continent}
                              countries={continents[continent]}
                            />
                          )) : <Col sm={12} className="text-center"><h1>Such empty, try whit other country name.</h1></Col>)
                }
              </Row>
            )
          }
        </SearchContext.Consumer>
      </Col>
      <BackToTopButton />
    </Row>
  );
});

export default HomePage;
