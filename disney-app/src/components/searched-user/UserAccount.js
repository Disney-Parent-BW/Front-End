import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext.js';

import Account from './Account.js';

import {Grid } from 'semantic-ui-react';

const UserComments = () => {
    const { account, user } = useContext(SearchContext);

    if(account.length > 0) {
        return (
            <Grid relaxed columns={4}>
                {account.map(account => {
            return (
                <Grid.Column>
                    <Account user={user} account={account} />
                </Grid.Column>
            )
        })}
            </Grid>
        ) 
       
    } else {
        return (
            <div>No comments...</div>
        )
    }
}

export default UserComments;