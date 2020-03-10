import React, {useState, useEffect} from 'react';
import axiosWithAuth from './utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import DeleteUser from './components/DeleteUser';

function SavedList () {

  const [savedUsers, setSavedUsers]= useState ([])

    useEffect (() => {
      const getSavedUsers = () => {
        axiosWithAuth()
        .get(`/api/users`)
        .then (response => {
          setSavedUsers(response.data);
        })
        .catch(error=> console.log(error))
      }
      getSavedUsers();
    }, [])
   


  return (
    <>
    <div className="saved-list">
      <h3>Saved Users:</h3>
      {savedUsers.map(user => (
          <Link to={`/users/${user.id}`} key={user.id}></Link>
        ))}
    </div>
    </>
  );
}

function SavedUserDetails ({savedUser}) {
  const {disney_username, account_type} = savedUser; 

  return (
    <>
    <div className = "saved-user-card">

        <div className = "disney-username">
          <h2>Username: {disney_username}</h2>
        </div>

        <div className = "account-type">
          <h3>Account Type: {account_type}</h3>
        </div>    
    </div>

    <div>
      <DeleteUser />
    </div>

    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </>
  )
}


export default SavedList;