import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        
        <div>
            this is service {serviceId}
        </div>
    );
};

export default ServiceDetails;