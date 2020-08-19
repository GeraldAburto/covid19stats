import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

const CustomErrorPage = withRouter(({ history }) => (
  <Row>
    <Col sm={12} className="text-center">
      <p style={{ fontSize: '40px' }}>
        <FontAwesomeIcon icon={faHeartBroken} size="lg" />
        {' '}
        Something went wrong.
      </p>
    </Col>
    <Col sm={12} className="text-center">
      <Button onClick={() => history.push('/')}>Back to home page</Button>
    </Col>
  </Row>
));

export default CustomErrorPage;
