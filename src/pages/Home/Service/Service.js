import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { HiArrowNarrowRight} from 'react-icons/hi'
import { useHistory } from 'react-router';

const Service = ({ service }) => {
    const { id, title, details, image } = service
    const history = useHistory()
    const handleDetails = (id)=>{
        history.push(`service/${id}`)
    }
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <div className='border border-muted rounded w-25 mx-auto my-3'></div>
                    <Card.Text className='text-muted'>
                        {details}
                    </Card.Text>
                    <Button className="btn-bg" onClick={() => handleDetails(id)}>Learn more <HiArrowNarrowRight className="text-white"/></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;