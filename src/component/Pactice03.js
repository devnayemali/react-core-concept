import React, { useEffect, useState } from 'react'

export const Pactice03 = () => {
    return (
        <div className='border'>
            <h1>Pactice 03: Load dynamic data, API call useEffect integrate state</h1>
            <GetUsers />
        </div>
    )
}

const GetUsers = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));

    }, []);

    return (
        <div>
            <h1>External User List Here</h1>
            <ul>
                {users.map(user => <User key={user.email} name={user.name} email={user.email} address={user.address} website={user.website} />)}
            </ul>
        </div>
    );
}


const User = (props) => {
    return(
        <div className='user_item border2'>
            <p>User Name : {props.name}</p>
            <p>User Email : {props.email}</p>
            <p>Website : <a target='__blank' href={props.website}>{props.website}</a></p>
            <p>Address : {props.address.street}, {props.address.city}</p>
        </div>
    );
}



