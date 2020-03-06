import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Button = styled.button`

`

function SaveUser () {

    let state = {
        username: '',
        accountType: '',
    }

  
    function onSubmit () {
        console.log(state)

        axiosWithAuth()
            .post(``, state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

            return (
            
                <Button className = "save-user-btn"
                    onClick={() => onSubmit()}>Add To Saved List</Button>
                )
        }
  

export default SaveUser; 
