import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState();
    useEffect( ()=>{
        fetch('https://eerie-cat-58293.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="container">
            <Banner></Banner>
            <h1>Our~Services</h1>
            <div className="services">
            {
                services?.map(service => <Service
                key={service._id}
                service= {service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Home;