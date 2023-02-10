import React from 'react';
import "./main.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Secondary_navbar = () => {
  return (
    <Navbar className='secondary_navbar'>
      <Container>
        <Navbar.Brand className='secondary_nav_service'>24 Hrs Service | 365 Days</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          </Nav>
          <Nav className='secondary_nav_link'>
            <Nav.Link href="#">Translate |</Nav.Link>
            <Nav.Link href="#">Support |</Nav.Link>
            <Nav.Link href="#">Help |</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Secondary_navbar