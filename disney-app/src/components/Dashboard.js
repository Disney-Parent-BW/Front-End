import React, {useState} from 'react';
// import userFeed from './userFeed';
import Card from './Card';
import UpdateUsername from './UpdateUsername';

const Dashboard = () => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('username'));
    const [userAccount] = useState(localStorage.getItem('accountType'));
    return (
        <>
        <div className = "dashboard-header">
                <h2>Welcome to the Disney Parent App, {currentUser}.</h2>
                <h2>Account type: {userAccount}</h2>
                <div className = "update-section">
                <UpdateUsername setCurrentUser={setCurrentUser} /> 
                </div>
            </div>
            <Card/>
            {/* <userFeed/> */}
        </>
    )
}

export default Dashboard;
