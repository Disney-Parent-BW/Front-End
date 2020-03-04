import React, {useState} from 'react';
// import saltFeed from './userFeed';
import Card from './Card';

const Dashboard = () => {
    const [currentUser] = useState(localStorage.getItem('email'));

    return (
        <>
        <div className = "dashboard-header">
                <h1>Welcome to the Disney Parent App, {currentUser}.</h1>
            </div>
            <Card/>
            {/* <saltFeed/> */}
        </>
    )
}

export default Dashboard;
