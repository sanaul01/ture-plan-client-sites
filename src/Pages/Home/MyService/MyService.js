import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyService = () => {
    const {user} = useAuth();
    const [service, setService] = useState([]);
    useEffect( ()=>{
        fetch(`http://localhost:5000/myservice/${user?.email}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [user.email])
    return (
        <div>
            <h2>This is my Service {service.length}</h2>
        </div>
    );
};

export default MyService;