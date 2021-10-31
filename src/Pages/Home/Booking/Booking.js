import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    

    useEffect( ()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=> res.json())
        .then(data => setService(data))
    }, []);

    const handletitleChange = e =>{
        const service = e.target.valau;
        setService(service)
        // const updateservice = {title: service.title, price: service.price, description: service.description, img: service.img};
        // setService(updateservice)
    }
    const handleDescriptionChange = e =>{
        const updateservice = {title: service.title, price: service.price, description: service.description, img: service.img};
        setService(updateservice)
    }
    const handelPriceChange = e =>{
        const updateservice = {title: service.title, price: service.price, description: service.description, img: service.img};
        setService(updateservice)
    }
    const handleImgChange = e =>{
        const updateservice = {title: service.title, price: service.price, description: service.description, img: service.img};
        setService(updateservice)
    }
    


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/myorder', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('successfully added')
                reset()
            }
        })
    };


    return (
        <div>
            <img src={service.img} alt="" />
            <h2>{service.title}</h2>
            <h3>{service.price}</h3>
            <p>{service.description}</p>
            <h2>this is booking {serviceId}</h2>
            {/* <Link to={`/placeorder/${service._id}`}>
            <button>PlaceOrder</button>
            </Link> */}
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="submit"/>
                <br />
                <input {...register("title")} onChange={handletitleChange} value={service?.title || ''} placeholder="Title" />
                
                <br />
                <textarea {...register("description")} onChange={handleDescriptionChange}
                value={service?.description || ''} placeholder="Description"/>
                <br />
                <input type="number" {...register("price")} onChange={handelPriceChange}
                value={service?.price || ''} placeholder="price"/>
                <br />
                <input {...register("img")} onChange={handleImgChange} value={service?.img || ''}
                placeholder="image url" />
                
            </form>
            </div>
        </div>
    );
};

export default Booking;