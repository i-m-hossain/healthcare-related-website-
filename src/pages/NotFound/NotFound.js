import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/3828535.png'

const NotFound = () => {
    return (
        <div className='text-center'>
            <div>
                <img src={img} alt="" />
            </div>
            <Link to="/home" className="px-4 py-2 bg-danger text-white text-decoration-none rounded">Go back to Home</Link>
        </div>
        
    );
};

export default NotFound;