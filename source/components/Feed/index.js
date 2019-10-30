// Core
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';

// Components
import { Todo } from '../../components';

const Feed = ({ todos }) => {
    const todosJSX = todos.map((todo) => {
        return <Todo key = { todo.id } { ...todo } />;
    });

    return (
        <CardGroup className = 'flex-column'>
            { todosJSX }
        </CardGroup>
    );
};

export default Feed;
