import React, {useState} from 'react';
import Card from './Card';

const Dashboard = () => {
    const [currentUser] = useState(localStorage.getItem('email'));

    return (
        <>
        <div className = "dashboard-header">
                <h1>Welcome to the app, {currentUser}.</h1>
            </div>
            <Card/>
        </>
    )
}

export default Dashboard;
