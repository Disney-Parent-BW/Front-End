import React, {useContext} from 'react';
import UserContext from '../contexts/userContext'; 

function DeleteUser () {
    const {users, deleteUser} = useContext (UserContext)
    console.log('kd:deleteuser:useContext', users)

    return (
        <>
            {users.map (user => (
                <div>
                   

                    <h2>User id: {user.id}</h2>

                    <button className = 'remove-user-btn'
                        onClick = {() => deleteUser (user.id)}
                        >
                            Delete User
                        </button>
                        <hr></hr>
                        <br></br>
                </div>
            ))}
        </>
    )
}

export default DeleteUser;