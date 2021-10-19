import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className="my-5">
            <Row className="why-bg" sm={1} md={2}>
                <Col>

                </Col>
                <Col className="mt-5 p-5 ">
                    <div className="p-5 bg-light border border-muted rounded">
                        <h2 className="text-danger fw-bold">People Trust Me</h2>
                        <h5>because i care about their pets</h5>
                        <div className="border border-muted w-25 my-3"></div>
                        <p className="text-muted">One of the most important factors about a pet’s life is the information of, the use of, and the growing knowledge of medicine. Medicine is a form of art. It depends on how skillfully doctors apply their knowledge when dealing with patients.</p>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h2 className="text-danger fw-bold">9000+</h2>
                                <h6 className="fw-bold">Cured Pets</h6>
                            </div>
                            <div>
                                <h2 className="text-danger  fw-bold">300+</h2>
                                <h6 className="fw-bold">Families Trust</h6>
                            </div>
                            <div>
                                <h2 className="text-danger  fw-bold">24/7</h2>
                                <h6 className="fw-bold">Emergency Help</h6>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default WhyUs;