import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';

const UpdateService = () => {
    const {serviceId} = useParams()
    const [service, setService] = useState({})
    useEffect( ()=>{
        fetch(`https://eerie-cat-58293.herokuapp.com/services/${serviceId}`)
        .then(res=> res.json())
        .then(data => setService(data))
    }, [])

    const handleNameChange = e =>{
        const updateTitle = e.target.value;

        const updateservice = {title: updateTitle, price: service.price, description: service.description, img: service.img};
        setService(updateservice)
    };

    const handelPriceChange = e =>{
        const updatePrice = e.target.value;

        const updateService = {title: service.title, price: updatePrice, description: service.description, img: service.img};
        setService(updateService)
    };

    const handleDescriptionChange = e =>{
        const updateDescription = e.target.value;

        const updateService = {title: service.title, price: service.price, description: updateDescription, img: service.img};
        setService(updateService);
    };

    const handleImgChange = e =>{
        const updateImg = e.target.value;

        const updateService = {title: service.title, price: service.price, description: service.description, img: updateImg};
        
        setService(updateService);
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        const proced = window.confirm("Are you want to update?")
        if(proced){
            fetch(`https://eerie-cat-58293.herokuapp.com/services/${serviceId}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('update Successfully')
                setService({});
            }
        })
        }
    };
    return (
        <div>
            <h2>Reset this service</h2>
            <div>
                <img src={service?.img} alt="" />
                <h2>{service?.title}</h2>
                <h3>{service?.price}</h3>
                <p>{service?.description}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} onChange={handleNameChange} value={service?.title || ''} placeholder="Title" />
                <br />
                <textarea {...register("description")} onChange={handleDescriptionChange}
                value={service?.description || ''} placeholder="Description"/>
                <br />
                <input type="number" {...register("price")} onChange={handelPriceChange}
                value={service?.price || ''} placeholder="price"/>
                <br />
                <input {...register("img")} value={service?.img || ''}
                onChange={handleImgChange} placeholder="image url" />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateService;