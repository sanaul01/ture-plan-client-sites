import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    useEffect( ()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=> res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <img src={service.img} alt="" />
            <h2>{service.title}</h2>
            <h3>{service.price}</h3>
            <p>{service.description}</p>
            <h2>this is booking {serviceId}</h2>
        </div>
    );
};

export default Booking;