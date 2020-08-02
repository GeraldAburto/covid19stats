import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import SearchBar from '../../components/SearchBar/SearchBar';

const CountryPage = () => {
  const { country } = useParams();
  return (
    <Row>
      <Col sm={12}><SearchBar /></Col>
      <Col sm={12}>{country}</Col>
    </Row>
  );
};

export default CountryPage;
