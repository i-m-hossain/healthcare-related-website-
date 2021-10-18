import React from 'react';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';
import { ImMobile } from "react-icons/im";
import { GoLocation } from "react-icons/go"
import { MdOutlineLogout } from "react-icons/md"
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        color: "#FF436B",
        fontWeight: "bold"
    }
    return (
        <Container>
            <div className="d-none d-md-block">
                <Row>
                    <Col className="mt-4">
                        <span>8.00AM - 6.00PM</span>
                        <ImMobile className="h2 ms-2 mt-4" />
                    </Col>
                    <Col >
                        <div>
                            <img src={logo} alt="logo" width="160" />
                        </div>
                    </Col>
                    <Col className="d-flex mt-4">
                        <GoLocation className="h2 mt-3 me-2" />
                        <div className="mt-3" >
                            <h4>346 5th Avenue</h4>
                            <p className="text-muted">New york, NY</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className="d-block d-md-none">Animal Doctor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features" className="link">Home</Nav.Link>
                            <Nav.Link href="#features" className="link">Services</Nav.Link>
                            <Nav.Link href="#pricing" className="link">About Us</Nav.Link>
                            <Nav.Link href="#deets" className="link">Contact Us</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className="link">
                                Login
                            </Nav.Link>
                            <Nav.Link >
                                Signed in as: <span className="me-3 fw-bold text-danger">Mr x</span>
                                
                            </Nav.Link>
                            <Nav.Link className="position-relative">
                                <MdOutlineLogout className="position-absolute top-0 logout" /> 
                            </Nav.Link>
                            
                        </Nav>
                        <Nav>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;