import React, { useState, useContext } from "react";
import axios from 'axios'
import styled from 'styled-components';
import { Link,} from 'react-router-dom';
// import Navigation from './Navigation';

import { SearchContext } from '../contexts/SearchContext.js';

import { Button, Form } from 'semantic-ui-react';

const Wrapper = styled.div`
margin-top: 100px;
height: 500px;
   
`
const linkWrapper = styled.p`
    font-size: 3rem;
   
`

export default function SearchForm() {
    const { setAccount, setUser } = useContext(SearchContext);
    const [input, setInput] = useState('');

const handleInputChange = event => {
  setInput(event.target.value);
};

const handleSubmit = () => {
    axios.post("https://disney-parent-api.herokuapp.com/api/", { user: input })
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
      <linkWrapper>
      <Link to ="/dashboard" style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
      </linkWrapper>
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