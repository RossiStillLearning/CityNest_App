import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../image/logoputih 1.png'; // Ganti dengan path logo kamu

function CustomNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: '#211951' }} variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo"
              src={logo} // Path logo
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            CityNest
          </Navbar.Brand>
          
          {/* Toggle button for small screens */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
          {/* Collapsible Navbar */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/perumahan">Perumahan Layak</Nav.Link>
              <Nav.Link href="/warisan">Warisan Budaya</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
