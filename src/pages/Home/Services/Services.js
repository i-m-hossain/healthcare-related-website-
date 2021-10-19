import React from 'react';
import {  Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const {services} = useServices()
    console.log(services);
    return (
        <div className="text-center mt-5 pt-3" id="services">
            <h2>Welcome to My Clinic</h2>
            <p>Best services for your pets</p>
            <div className="border border-secondary  mx-auto" style={{width:"80px"}}></div>
            <Container className="py-4">
                <Row xs={1}  md={3} className="gy-5"> 
                    {
                        services.map(service => <Service service={service} key={service.id}></Service>)
                    }
                   
                </Row>
            </Container>
        </div>
    );
};

export default Services;