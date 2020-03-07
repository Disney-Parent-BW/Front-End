import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from "styled-components";
// import SaltFeed from './SaltFeed';
// import Logon from '/Logon';
// import List from './List';
import UserSearch from './UserSearch.js';
// import Dashboard from './Dashboard';
// import PrivateRoute from './PrivateRoute';


const WrapperDiv = styled.div `
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    // margin-top: 20px;
    font-size: 2rem;
    font-color: white;
    border-bottom: 2px solid white;
    padding: 20px;
`

// const Container = styled.div`

// `

const Navigation = () => {

  return (
    <>
    <WrapperDiv className = "NavWrap">    
          <Link to ="/dashboard" style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
          <Link to ="/search" style={{ textDecoration: 'none' , color: 'white' }}>User Search </Link>
          <Link to ="/saved" style={{ textDecoration: 'none' , color: 'white' }}>Saved User </Link>
    </WrapperDiv>


{/* 
      <Container> */}
            {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
            {/* <Route path="/logon" exact component={Logon} /> */}
            <Route path="/search" exact component={UserSearch} />
      {/* </Container> */}
          </>
   
  )};


 export default Navigation;