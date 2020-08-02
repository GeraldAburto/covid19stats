import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container } from 'react-bootstrap';

const DefaultLayout = ({ children }) => (
  <>
    <Navbar bg="light">
      <Navbar.Brand>Covid-19 Statistics</Navbar.Brand>
    </Navbar>
    <Container className="mt-3">
      {children}
    </Container>
  </>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
