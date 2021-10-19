import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="appointment-section overflow-hidden mt-5" id="appointment">
            <Row className="appoinment" sm={1} md={2}>
                <Col>

                </Col>
                <Col className="p-4">
                    <div className="p-5 bg-light border border-muted rounded">
                        <h2 className="fw-bold">Appointment</h2>
                        <h5>Don’t waste your time, make it online</h5>
                        <div className="border border-muted w-25 my-3"></div>
                        <form>
                            <div className="w-100 d-flex flex-column justify-content-between">
                                <input type="text" placeholder="Name" className="border border-muted p-2 mb-2 w-100"/>
                                <input type="text" placeholder="Email" className="border border-muted p-2 mb-2 w-100" />
                                <input type="text" placeholder="Phone" className="border border-muted w-100 p-2" />
                            </div>
                            <textarea className="border border-muted w-100 d-inline-block mt-2 p-2" name="" placeholder="Message" id="" rows="5"></textarea>
                            <button className="btn-danger text-white mt-2 p-2 border-0 rounded">Submit your request</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Appointment;