import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddUsers = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://eerie-cat-58293.herokuapp.com/users', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('successfully added')
                reset()
            }
        })
    };
    return (
        <div>
            <h2>Please registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />
                <input {...register("email", { required: true })} placeholder="Email" />
                <input {...register("date", { required: true })} placeholder="date"
                defaultValue={new Date()} />
                
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddUsers;