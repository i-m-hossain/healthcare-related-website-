import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const Details = () => {
    const {id} = useParams()
    const {services} =useServices()
    const service = services.find(service => service.id === parseInt(id))
    console.log(service?.title);
    return (
        <>
            <Container>
                <Card>
                    <Card.Title className="text-center fw-bold p-4">{service?.title}</Card.Title>
                    <Card.Img variant="top" src={service?.image} />

                    <Card.Body>
                        
                        <Card.Text className="text-muted">
                            {service?.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}; 

export default Details;