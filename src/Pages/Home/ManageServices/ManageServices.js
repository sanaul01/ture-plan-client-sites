import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageService.css'


// All services method 
const ManageServices = () => {
    const [manageServices, setManageServices] = useState();
    useEffect( ()=>{
        fetch('https://eerie-cat-58293.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setManageServices(data))
    }, []);

    // Delete method 
    const handledelete = id =>{
        const url = `https://eerie-cat-58293.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                alert('deleted')
                const remaining = manageServices?.filter(manageService=> manageService._id !== id)
                setManageServices(remaining)
            }
            
        })
    }


    return (
        <div>
            <h2>This is manageservice</h2>
            {
                manageServices?.map(manageService =><div
                className="manageservice"
                key={manageService._id}
                >
                    <img src={manageService.img} alt="" />
                    <h2>{manageService.title}</h2>
                    <h3>{manageService.price}</h3>
                    <p>{manageService.description}</p>
                    <Link to={`/updateservice/${manageService._id}`}>
                    <button>Update Service</button>
                    </Link>

                    {/* handeling delete button  */}
                    <button onClick={()=>handledelete(manageService._id)}>Delete Service</button>
                </div>)
                
            }
        </div>
    );
};

export default ManageServices;