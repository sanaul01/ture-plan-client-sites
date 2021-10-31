import React from 'react';

const MyOrder = ({myOrder}) => {
    const {title, price, description, img} = myOrder;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3>$ {price}</h3>
            <p>{description}</p>
        </div>
    );
};

export default MyOrder;