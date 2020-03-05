import React from "react";
import styled from 'styled-components';
import SearchForm from './SearchForm';

const Wrapper = styled.div`
  margin-top: 5%;
  margin: 0 auto;
  
`

function List() {


   return (
     <>
     <Wrapper className = "search-design">
        <SearchForm />
      </Wrapper>

      <div className="user-list">
        user list}
      </div>
     </>
   )};

export default List;