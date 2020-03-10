import React from "react";
import styled from "styled-components";
import axiosWithAuth from '../utils/axiosWithAuth';

const ButtonBox = styled.div`
display: flex;
justify-content: space-evenly;
`
const CardDesign = styled.div`
text-decoration: none;
background: white;
border-radius: 15px;
padding: 20px;
text-align: left;
`

const Card = (props) => {
  
  const handleSave = () => {
    let userInfo = {
      username: props.username,
      role: props.role,
    }

    axiosWithAuth()
    .post(`https://disney-parent-api.herokuapp.com/api/users/`, userInfo)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
  }

  return (
      <CardDesign>
          <div className='carousel-card'>
            
            <h3>User: {props.username}</h3>
            <h3>Account Type: {props.role}</h3>
            <ButtonBox>
            <button className = 'save-user-btn'
                    onClick = {() => handleSave()}>Save User</button>
            <button>Contact User</button>
            </ButtonBox>
            
          </div>
          </CardDesign>
        );
       }

export default Card;
