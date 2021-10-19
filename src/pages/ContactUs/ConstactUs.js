import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaMobileAlt} from 'react-icons/fa'
import { GrLocation} from 'react-icons/gr'
import { AiOutlineMail} from 'react-icons/ai'

const ContactUs = () => {
    return (
        <Container>
            <div className="text-center m-5">
                <h2>Get In Touch</h2>
                <h5 className="text-muted">how to find us</h5>
                <div style={{ border: "2px solid gray", width: "80px" }} className="mx-auto m-3"></div>
            </div>
            <Row xs={1} md={3} className="mx-auto m-5">
                <Col className="text-center">
                    <GrLocation className="h2"/>
                    <h4 className="fw-bold">Address</h4>
                    <p className="text-muted">489 5th Avenue New York.</p>
                    <p className="text-muted">NY 10014</p>
                </Col>
                <Col className="text-center">
                    <AiOutlineMail className="h2"/>
                    <h4 className="fw-bold">Email</h4>
                    <p className="text-muted">infoclinic@medicine.com</p>
                    <p className="text-muted">example@info.com</p>
                </Col>
                <Col className="text-center">
                    <FaMobileAlt className="h2"/>
                    <h4 className="fw-bold">Phone</h4>
                    <p className="text-muted">1 (415) 280 80 80</p>
                    <p className="text-muted">1 (415) 280 10 00</p>
                </Col>
            </Row>
            <Row>
                <div className="text-center ">
                    <h2>Contact Us</h2>
                    <h5 className="text-muted">have any questions?</h5>
                    <div style={{ border: "2px solid gray", width: "80px" }} className="mx-auto m-3"></div>
                </div>
                <Col className="p-5">
                    <div className="p-5 bg-light border border-muted rounded">
                        <form>
                            <div className="w-100 d-flex justify-content-between">
                                <input type="text" placeholder="Name" className="border border-muted p-2 w-50" />
                                <input type="text" placeholder="Email" className="border border-muted p-2 w-50 ms-5" />
                            </div>
                            <textarea className="border border-muted w-100 d-inline-block mt-2 p-2" name="" placeholder="Message" id="" rows="5"></textarea>
                            <button className="btn-danger text-white mt-2 p-2 border-0 rounded">Submit your request</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;