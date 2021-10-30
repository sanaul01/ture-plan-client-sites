import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, title, description, price, img} = service;
    return (
        <div className="single-service">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3>$ {price}</h3>
            <p>{description}</p> 
            <Link to={`/booking/${_id}`}>
            <button>Booking this place</button>
            </Link>
        </div>
    );
};

export default Service;