import React, { createContext, useState } from 'react';

export const SearchContext = createContext();
export const SearchContextProvider = props => {
    const [user, setUser] = useState([]);
    const [account, setAccount] = useState({});

    return (
        <SearchContext.Provider value={{user, setUser, account, setAccount}}>
            {props.children}
        </SearchContext.Provider>
    )
    
}