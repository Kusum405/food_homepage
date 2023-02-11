import React from 'react';
import "./main.css";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Secondary_navbar from './Secondary_navbar';
import { Form, FormControl,Badge,Button } from 'react-bootstrap';

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
                        {/* <div className='wrapper'>
                        <i className="fas fa-search searchbtn"></i> */}
                        <Form inline className="d-flex align-items-center search">     
                            <FormControl type="text" placeholder="Search" className="rounded-pill searchfield" />
                        </Form>
                        {/* </div> */}
                        
                        
                        <Nav className="mr-auto">
                        <Nav.Link className='login'>Login</Nav.Link>
                        <i class="fa-solid fa-cart-shopping"></i>
                       <div class='notification'> <h6 className='note'>22</h6></div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Main_navbar;