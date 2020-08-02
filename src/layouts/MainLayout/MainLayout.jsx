import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Container } from 'react-bootstrap';
import VirusesSVG from '../../assets/virus.svg';

const DefaultLayout = ({ children }) => (
  <>
    <Navbar bg="light">
      <Navbar.Brand>
        <img
          src={VirusesSVG}
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        COVID-19 Statistics
      </Navbar.Brand>
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
