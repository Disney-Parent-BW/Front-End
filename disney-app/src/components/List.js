import React from "react";
import styled from 'styled-components';
import SearchForm from './SearchForm';

const Wrapper = styled.div`

`

function List() {
   return (
     <>
     <Wrapper className = "search-design">
        <SearchForm />
      </Wrapper>
      <div className="user-list">
        {/* {userlist} */}
      </div>
     </>
   );
  }

export default List;