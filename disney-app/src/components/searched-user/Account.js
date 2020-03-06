import React from 'react';

import { Card, Image } from 'semantic-ui-react';

const Comment = props => {

    if(props.user.name) {
        return (
            <Card>
                <Card.Content>
                    <Image
                        size='tiny'
                        floated='right'
                        src=''
                        />
                    <Card.Header>{props.user.name.toUpperCase()}</Card.Header>
                    <Card.Description>
                        {props.account.text}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    } else {
        return <div> Nothing </div>
    }
}

export default Comment;