import React, {useState} from 'react';

const Dashboard = () => {
    const [currentUser] = useState(localStorage.getItem('username'));

    return (
        <>
        <div className = "dashboard-header">
                <h1>Welcome to the app, {currentUser}.</h1>
            </div>
        </>
    )
}

export default Dashboard;
