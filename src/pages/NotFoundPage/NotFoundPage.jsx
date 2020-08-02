import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => (
  <Row>
    <Col sm={12} className="text-center">
      <p style={{ fontSize: '40px' }}>
        <FontAwesomeIcon icon={faSadTear} size="lg" />
        {' '}
        Not Found.
      </p>
    </Col>
  </Row>
);

export default NotFoundPage;