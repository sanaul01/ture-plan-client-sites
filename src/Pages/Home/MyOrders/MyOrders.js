import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState();
    useEffect( ()=>{
        fetch('http://localhost:5000/myorder')
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, []);

    // Delete method 
    const handledelete = id =>{
        const url = `http://localhost:5000/myorder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                alert('deleted')
                const remaining = myOrders?.filter(myOrder=> myOrder._id !== id)
                setMyOrders(remaining)
            }
            
        })
    }

    return (
        <div>
            <h2>My orders</h2>
            {
                myOrders?.map(myOrder => <div
                key={myOrder._id}
                >
                    <img src={myOrder.img} alt="" />
                    <h2>{myOrder.title}</h2>
                    <h3>$ {myOrder.price}</h3>
                    <p>{myOrder.description}</p>
                    <button onClick={()=>handledelete(myOrder._id)}>Delete Service</button>
                </div>)
            }
        </div>
    );
};

export default MyOrders;