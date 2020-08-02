import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

const CustomErrorPage = () => (
  <Row>
    <Col sm={12} className="text-center">
      <p style={{ fontSize: '40px' }}>
        <FontAwesomeIcon icon={faHeartBroken} size="lg" />
        {' '}
        Something went wrong.
      </p>
    </Col>
  </Row>
);

export default CustomErrorPage;
