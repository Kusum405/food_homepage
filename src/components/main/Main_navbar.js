import React from 'react';
import "./main.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Secondary_navbar from './Secondary_navbar';
import { Form, FormControl, Button } from 'react-bootstrap';

const Main_navbar = () => {
    return (
        <>
            <Secondary_navbar />
            <Navbar className='main_navbar'>
                <Container>
                    <Navbar.Brand href="#" className='main_nav_brand'>LO<br></br>GO</Navbar.Brand>
                    <hr></hr>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto main_nav_link">
                            <Nav.Link className='num'><i class="fa-solid fa-phone"></i> 9874645645</Nav.Link>
                            <Nav.Link className='address'><i class="fa-solid fa-location-dot"></i> Kathmandu,Nepal  <i class="fa-solid fa-caret-down"></i> </Nav.Link>
                        </Nav>
                        <Form inline className="d-flex align-items-center">
                                <i className="fas fa-search searchbtn"></i>
                            <FormControl type="text" placeholder="Search" className="rounded-pill searchfield" />  
                        </Form>
                        <Nav className="mr-auto">
                        <Nav.Link className=''>Login</Nav.Link>
                        <i class="fa-regular fa-basket-shopping-simple"></i>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Main_navbar;