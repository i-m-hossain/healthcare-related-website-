import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel variant="dark" fade>
            <Carousel.Item className="position-relative">
                <img
                    className="d-block w-100"
                    src="http://patterson.dr-patterson-vet.themerex.net/wp-content/uploads/2018/05/slider-vet-01.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="slider-details">
                    <div className="p-3">
                        <h5 className="text-start">Animal Doctor</h5>
                        <p className="text-start">Professional care for your pets</p>
                        <div className="w-25 mb-2" style={{ border: '1px solid #FF436B'}}></div>
                        <p className="text-start">One of the essential qualities of a professional veterinarian is our patience. At our clinic, we  take a great care of you little furry friends.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="position-relative">
                <img
                    className="d-block w-100"
                    src="http://patterson.dr-patterson-vet.themerex.net/wp-content/uploads/2018/05/slider-vet-02.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className="slider-details">
                    <div className="p-3">
                        <h5 className="text-start">Animal Doctor</h5>
                        <p className="text-start">Professional care for your pets</p>
                        <div className="w-25 mb-2" style={{ border: '1px solid #FF436B' }}></div>
                        <p className="text-start">One of the essential qualities of a professional veterinarian is our patience. At our clinic, we  take a great care of you little furry friends.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="position-relative">
                <img
                    className="d-block w-100"
                    src="http://patterson.dr-patterson-vet.themerex.net/wp-content/uploads/2018/05/slider-vet-03.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="slider-details">
                    <div className="p-3">
                        <h5 className="text-start">Animal Doctor</h5>
                        <p className="text-start">Professional care for your pets</p>
                        <div className="w-25 mb-2" style={{ border: '1px solid #FF436B' }}></div>
                        <p className="text-start">One of the essential qualities of a professional veterinarian is our patience. At our clinic, we  take a great care of you little furry friends.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;