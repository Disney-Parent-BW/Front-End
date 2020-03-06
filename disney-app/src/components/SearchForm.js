import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import styled from 'styled-components';

import { SearchContext } from '../contexts/SearchContext.js';

import { Button, Form } from 'semantic-ui-react';

const Wrapper = styled.div`

   
`

export default function SearchForm() {
    const { setAccount, setUser } = useContext(SearchContext);
    const [input, setInput] = useState('');

const handleInputChange = event => {
  setInput(event.target.value);
};

const handleSubmit = () => {
    axios.post("https://disney-parent-api.herokuapp.com/", { user: input })
    .then(res => {
        console.log("TCL: SearchForm -> res", res)
        setAccount(res.data.top_ten_user);
        setUser({
            name: res.data.user,
        });

    })
    .catch(err => {
        console.log(err);
    })
}
return (
  <div >
    <Wrapper className ="form-style">
    <Form onSubmit={handleSubmit} size='huge'>
        <Form.Field>
            <input
                id="name" 
                type="text" 
                name="textfield" 
                placeholder="Search"
                value={input || ''} 
                onChange={handleInputChange}/>
        </Form.Field>

        <Button size='huge' primary type="submit">Search</Button>
    </Form>
    </Wrapper>
    </div>
)}