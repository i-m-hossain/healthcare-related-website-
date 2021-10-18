import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="text-center">
            <h2>Welcome to My Clinic</h2>
            <p>Best services for your pets</p>
            <div className="border border-secondary  mx-auto" style={{width:"80px"}}></div>
            <Container className="py-4">
                <Row xs={2} md={3} className="gy-5"> 
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                   
                </Row>
            </Container>
        </div>
    );
};

export default Services;