import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext.js';

import { Card, Image } from 'semantic-ui-react';


const UserCard = () => {
    const { user } = useContext(SearchContext);
    if(user.name) {
        return (
            <Card>
                <Card.Content>
                    <Image
                        size='tiny'
                        floated='right'
                        src=''
                        />
                    <Card.Header>{user.name.toUpperCase()}</Card.Header>
                    {/* <Card.Header>{user.account.toUpperCase()}</Card.Header> */}
                </Card.Content>
            </Card>
        )
    } else {
        return (
            <div>No user...</div>
        )
    }
    
}

export default UserCard;