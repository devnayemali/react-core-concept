import React, { useEffect, useState } from 'react';
import './root.css'

const Root = ({name}) => {
    const [users,setUsers]=useState([])
    console.log(users)


useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setUsers(data))
},[])

    return (
        <div className='style'>
            {
                users &&
                users.map((item)=>(
                    <div className='unic' key={item.id}>
                     <h1>User Name : {item.name}</h1>
                     <h4>address : {item.address}</h4>
                     <p>Home : {item.home}</p>
                     <button className='btn'>Details</button>
                    </div>
                ))
            }
            
        </div>
    );
};

export default Root;