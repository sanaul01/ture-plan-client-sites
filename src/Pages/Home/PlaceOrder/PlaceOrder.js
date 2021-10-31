import React, { useEffect, useState } from 'react';
import MyOrder from './MyOrder/MyOrder';

const PlaceOrder = () => {
    const [myOrders, setMyOrders] = useState();
    useEffect( ()=>{
        fetch('https://eerie-cat-58293.herokuapp.com/myorder')
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [])
    return (
        <div>
            {
                myOrders?.map(myOrder => <MyOrder
                key={myOrder._id}
                myOrder={myOrder}
                ></MyOrder>)
            }
        </div>
    );
};

export default PlaceOrder;