import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = withRouter(({ history }) => (
  <Row>
    <Col sm={12} className="text-center">
      <p style={{ fontSize: '40px' }}>
        <FontAwesomeIcon icon={faSadTear} size="lg" />
        {' '}
        Not Found.
      </p>
    </Col>
    <Col sm={12} className="text-center">
      <Button onClick={() => history.push('/')}>Back to home page</Button>
    </Col>
  </Row>
));

export default NotFoundPage;
