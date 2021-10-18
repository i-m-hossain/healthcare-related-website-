import React from 'react';
import Appointment from '../Appointement/Appointment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyUs></WhyUs>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;