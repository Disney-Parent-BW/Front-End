import React from 'react';

import { Card,} from 'semantic-ui-react';

const Comment = props => {

    if(props.user.name) {
        return (
            <Card>
                <Card.Content>
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