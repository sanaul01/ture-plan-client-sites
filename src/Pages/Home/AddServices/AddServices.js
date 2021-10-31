import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://eerie-cat-58293.herokuapp.com/services', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('successfully added')
                reset()
            }
        })
    };
    return (
        <div>
            <h2>Add Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 30 })} placeholder="Title" />
                <br />
                <textarea {...register("description")} placeholder="Description"/>
                <br />
                <input type="number" {...register("price")} placeholder="price"/>
                <br />
                <input {...register("img")} placeholder="image url" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;