import React, { useState, useEffect, useContext } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Continent from './components/Continent/Continent';
import SearchBar from '../../components/SearchBar/SearchBar';
import BackToTopButton from '../../components/BackToTopButton/BackToTopButton';
import Covid19Service from '../../Covid19Service';
import SearchContext from '../../contexts/SearchContext';

const HomePage = withRouter(({ history }) => {
  const [statistics, setStatistics] = useState({});
  const [showSpinner, setShowsSpinner] = useState(true);
  const searchContext = useContext(SearchContext);

  useEffect(() => {
    Covid19Service.getStatistics(searchContext.search)
      .then((response) => {
        setStatistics(response);
        setShowsSpinner(false);
      })
      .catch(() => history.push('/error'));
  }, [searchContext.search, history]);

  return (
    <Row>
      <Col sm={12}><SearchBar /></Col>
      <Col sm={12}>
        <Row>
          {
            showSpinner
              && (
              <Col sm={12} className="text-center">
                <Spinner animation="border" role="status" size="lg">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Col>
              )
          }
          {
             statistics
               ? (Object.keys(statistics)
                 .map((continent) => (
                   <Continent
                     key={continent}
                     continent={continent}
                     countries={statistics[continent]}
                   />
                 ))) : <Col sm={12} className="text-center"><h1>Such empty, try whit another country name.</h1></Col>
          }
        </Row>
      </Col>
      <BackToTopButton />
    </Row>
  );
});

export default HomePage;
