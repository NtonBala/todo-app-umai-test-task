// Core
import React, { useEffect } from 'react';
import { array, object, string } from 'prop-types';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner, Feed } from '../components';

// Instruments
import { book } from '../navigation/book';

const TodosFeed = ({ todos, actions, filter, title }) => {
    useEffect(() => {
        actions.fetchTodosAsync(filter);
    }, [filter]);

    return (
        <Catcher>
            <Spinner />

            <Tab.Pane eventKey = { book[filter] }>
                <h2>{ title }</h2>

                <Feed todos = { todos } />
            </Tab.Pane>
        </Catcher>
    );
};

TodosFeed.propTypes = {
    actions: object.isRequired,
    filter:  string.isRequired,
    title:   string.isRequired,
    todos:   array.isRequired,
};

export default TodosFeed;
