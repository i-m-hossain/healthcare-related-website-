import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Home/Service/Service';

const Prices = () => {
    const{priceItems} = useServices()
    console.log(priceItems);
    return (
        <Container>
            <Container className="py-4">
                <Row sm={2} md={3} className="gy-5">
                    {
                        priceItems.map(item => <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Title className="text-danger fw-bold"> ${item.price}</Card.Title>
                                    </div>
                                    <div className='border my-3 rounded w-25 mx-auto'></div>
                                    <Card.Text className=''>
                                        {item?.list.map(item=> <li>{item}</li>)}
                                    </Card.Text>
                                    <Button variant="danger"> Appointment</Button>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }

                </Row>
            </Container>

            
        </Container>
    );
};

export default Prices;