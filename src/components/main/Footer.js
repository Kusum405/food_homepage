import React from 'react';
import { Container,Nav, Row, Col, Image,Link } from 'react-bootstrap';

const Footer = () => {
    return (

        <footer>
            <Container>
                <Row>
                    {/* <Col md={3}>
                            <Image src="logo.png" alt="Company Logo" style={{ width: '100%' }} />
                        </Col> */}
                    <Col md={6}>
                        <h5 className='footer_title'>Categories</h5>
                        <Row>
                            <Col md={6}>
                                <ul className='footer_lists'>
                                    <li className='lists'>Breatfast Menu</li>
                                    <li className='lists'>Fruit</li>
                                    <li className='lists'>Organic Salad</li>
                                    <li className='lists'>Signature Pizza(12 inch)</li>
                                    <li className='lists'>Half And Half Pizza</li>
                                    <li className='lists'>Pizza</li>
                                    <li className='lists'>Extra Toppings For Pizza</li>
                                    <li className='lists'>Antipasti</li>
                                    <li className='lists'>Spaghetti Or Penne</li>
                                    <li className='lists'>Risotto</li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <ul className='footer_lists'>
                                    <li className='lists'>Dessert</li>
                                    <li className='lists'>Oven Baked Dishes</li>
                                    <li className='lists'>Bottle Pickle Chilly</li>
                                    <li className='lists'>Signature Pizza(12 inch)</li>
                                    <li className='lists'>Extra</li>
                                    <li className='lists'>Extra Toppings For Pizza</li>
                                    <li className='lists'>Antipasti</li>
                                    <li className='lists'>Spaghetti Or Penne</li>
                                    <li className='lists'>Soup</li>
                                    <li className='lists'>Lunch Menu</li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={6}>
                        <h5 className='footer_title'>Useful Links</h5>
                        <Row>
                            <Col md={4}>
                                <ul className='footer_lists'>
                                    <li className='lists'>About</li>
                                    <li className='lists'>Careers</li>
                                    <li className='lists'>Blog</li>
                                    <li className='lists'>Press</li>
                                    <li className='lists'>Lead</li>
                                    <li className='lists'>Value</li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <ul className='footer_lists'>
                                    <li className='lists'>Privacy</li>
                                    <li className='lists'>Terms</li>
                                    <li className='lists'>FAQs</li>
                                    <li className='lists'>Security</li>
                                    <li className='lists'>Mobile</li>
                                    <li className='lists'>Contact</li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <ul className='footer_lists'>
                                    <li className='lists'>Partner</li>
                                    <li className='lists'>Express</li>
                                    <li className='lists'>Local</li>
                                    <li className='lists'>Spotlight</li>
                                    <li className='lists'>Warehouse</li>
                                    <li className='lists'>Deliver</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <h5 className='footer_title'>Payment Partners</h5>
                    <div className="d-flex flex-wrap payment_row">
                        <div className='esewa_rect'>
                            <Image src="./uploads/esewa.png" alt="Your Image" className="img-fluid esewa_img" />
                            <h6 className='name'>eSewa</h6>
                            <h6 className='process'>Pay using esewa wallet</h6>
                        </div>
                        <div className='esewa_rect'>
                            <Image src="./uploads/khalti.png" alt="Your Image" className="img-fluid esewa_img" />
                            <h6 className='name'>Khalti</h6>
                            <h6 className='process'>Pay using khalti wallet</h6>
                        </div>
                        <div className='esewa_rect'>
                            <Image src="./uploads/Ime.png" alt="Your Image" className="img-fluid ime_img" />
                            <h6 className='name'>IME Pay</h6>
                            <h6 className='ime_process'>Pay using IME wallet</h6>
                        </div>


                    </div>
                </Row>
                <Row className='last_footer'>
                    <Col md={6}>
                        <h5 className='copyright'> © test Private Limited 2022</h5>
                    </Col>
                    <Col md={4}>
                        <div className='justify-content-end foot_link'>
                            <a href="#">Terms & Conditions   |</a>
                            <a href="#">  Privacy Policy</a>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='social'>
                        <i className="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i>  <i class="fa-brands fa-linkedin"></i>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer