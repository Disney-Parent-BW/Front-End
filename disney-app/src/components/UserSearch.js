import React from 'react';

import SearchForm from './SearchForm.js';
import UserCard from './searched-user/UserCard.js';
import UserAccount from './searched-user/UserAccount.js';

import { SearchContextProvider } from '../contexts/SearchContext.js';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`;

const UserSearch = () => {

    return (<>
        <SearchContextProvider>
            <Container>
                <SearchForm />
                <UserCard />
                <UserAccount />
            </Container>
        </SearchContextProvider>
    </>);
}

export default UserSearch;