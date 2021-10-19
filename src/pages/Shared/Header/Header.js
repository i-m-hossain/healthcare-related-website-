import React from 'react';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';
import { ImMobile } from "react-icons/im";
import { GoLocation } from "react-icons/go"
import { MdOutlineLogout } from "react-icons/md"
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth()
    const handleLogout = () =>{
        logOut()
    }
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
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" >
                <Container className=" mb-4">
                    <Navbar.Brand href="#home" className="d-block d-md-none">Animal Doctor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to='/home' className="link">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services" className="link">Services</Nav.Link>
                            <Nav.Link href="#pricing" className="link">About Us</Nav.Link>
                            <Nav.Link href="#deets" className="link">Contact Us</Nav.Link>
                            
                            {
                                user.email ?
                                <>
                                        <Nav.Link >
                                            Signed in as: <span className="me-3 fw-bold text-danger">{user?.displayName}</span>

                                        </Nav.Link>
                                        <Nav.Link className="position-relative" title="Logout" onClick={handleLogout}>
                                            <MdOutlineLogout className="position-absolute top-0 logout" />
                                        </Nav.Link>
                                </>
                                :

                                    <Nav.Link eventKey={2} as={Link} to="/login" className="link" >
                                        Login
                                    </Nav.Link>
                            }
                            
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