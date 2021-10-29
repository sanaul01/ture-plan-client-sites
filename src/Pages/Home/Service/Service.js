import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {title, description, price, img} = service;
    return (
        <div className="single-service">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3>$ {price}</h3>
            <p>{description}</p> 
        </div>
    );
};

export default Service;