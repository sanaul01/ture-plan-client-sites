import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState();
    useEffect( ()=>{
        fetch('https://eerie-cat-58293.herokuapp.com/myorder')
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, []);

    // Delete method 
    const handledelete = id =>{
        const deleteProced = window.confirm("Are you want to delete?");
        if(deleteProced){
            const url = `https://eerie-cat-58293.herokuapp.com/myorder/${id}`;
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
    }

    return (
        <div>
            <h2>My orders</h2>
            {
                myOrders?.map(myOrder => <div  
                    className="mt-5"
                    key={myOrder._id}
                >
                    <img className="col-sm-6" src={myOrder.img} alt="" />
                    <h2>{myOrder.title}</h2>
                    <h3>$ {myOrder.price}</h3>
                    <p>{myOrder.description}</p>
                    <button className="btn btn-warning" onClick={()=>handledelete(myOrder._id)}>Delete Service</button>
                </div>)
            }
        </div>
    );
};

export default MyOrders;