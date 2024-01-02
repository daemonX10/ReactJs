import React, { useContext } from 'react'
import { UserContext } from '../context/userContext';

const Profile = () => {
    const {user} = useContext(UserContext);

    if(!user){
        return <div>Please Login</div>
    }else{
        return(
            <div>
                <h2>Profile</h2>
                <div>Username: {user.username}</div>
                <div>Password: {user.password}</div>
            </div>
        )
    }
}

export default Profile