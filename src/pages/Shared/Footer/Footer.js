import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { IoIosFingerPrint } from 'react-icons/io'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsJournalBookmark } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'


const Footer = () => {
    return (
        <div className="bg-dark p-5 mt-5">
            <Container >
                <Row sm={1} md={3} className="g-3">
                    <Col>
                        <Card style={{ width: '18rem', height: "18rem" }}>
                            <Card.Title className="text-center pt-4">
                                <IoIosFingerPrint className="h2" />
                            </Card.Title>

                            <Card.Body>
                                <Card.Title className="text-center">About Us</Card.Title>
                                <div className="border border-muted w-25 my-2 mx-auto"></div>
                                <Card.Text className='text-muted text-start'>
                                    We provide primary care to animals who suufered from disease and nurture with utmost priority
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: "18rem" }}>
                            <Card.Title className="text-center pt-4">
                                <AiOutlineClockCircle className="h2" />
                            </Card.Title>

                            <Card.Body>
                                <Card.Title className="text-center">Working Hours</Card.Title>
                                <div className="border border-muted w-25 my-2 mx-auto"></div>
                                <Card.Text className='text-muted text-start'>
                                    <p>Mon - Fri: 8.00 am - 6.00 pm</p>
                                    <p>Saturday: 10.00 am - 3.00 pm</p>
                                    <p>Sunday: Closed</p>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height:"18rem" }}>
                            <Card.Title className="text-center pt-4">
                                <BsJournalBookmark className="h2" />
                            </Card.Title>

                            <Card.Body>
                                <Card.Title className="text-center">Contacts
                                </Card.Title>
                                <div className="border border-muted w-25 my-2 mx-auto"></div>
                                <Card.Text className='text-muted text-start'>
                                    Phone: 1 (415) 280 80 80
                                    489 5th Avenue New York. NY
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="text-white text-center mt-5"> Developed with <AiFillHeart className="text-danger"/> By Md Imran Hosain &copy; 2021</div>
        </div>

    );
};

export default Footer;