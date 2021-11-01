import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Booking.css'

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect( ()=>{
        fetch(`https://eerie-cat-58293.herokuapp.com/services/${serviceId}`)
        .then(res=> res.json())
        .then(data => {
            setService(data)
        })
    }, []);


    // Handelig part
    const handletitleChange = e =>{
        const updateservice = {title: service.title, price: service.price, description: service.description, img: service.img};
        setService(updateservice)
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
    

    // Server post part 
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://eerie-cat-58293.herokuapp.com/myorder', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('successfully added')
                reset()
            }
        })
    };


    return (
        <div className="booking">
            <div>
                <img src={service.img} alt="" />
                <h2>{service.title}</h2>
                <h3>{service.price}</h3>
                <p>{service.description}</p>    
            </div>
            
            <div className="pt-5">
            <h2>Submit to Add Order</h2>
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