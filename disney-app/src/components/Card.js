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
`

const Card = (props) => {
  
  const handleSave = () => {
    let userInfo = {
      disney_username: props.name,
      pass_type: props.pass,
      cost: props.cost
    }

    axiosWithAuth()
    .post(``, userInfo)
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
            <h2>{props.name}</h2>
            <h3>User: {props.pass}</h3>
            <p3>Pass cost: {props.cost}</p3>
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
