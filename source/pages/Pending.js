// Core
import React from 'react';
import { array } from 'prop-types';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner, Feed } from '../components';

// Instruments
import { book } from '../navigation/book';
import { mockedTodos } from '../instruments/mockedData';

const Pending = ({ todos }) => {
    const pendingTodos = todos.filter((todo) => {
        return !todo.removed && !todo.completed;
    });

    return (
        <Catcher>
            <Spinner />

            <Tab.Pane eventKey = { book.pending }>
                <h2>Pending Todo Items:</h2>

                <Feed todos = { pendingTodos } />
            </Tab.Pane>
        </Catcher>
    );
};

Pending.defaultProps = {
    todos: mockedTodos.toJS(),
};

Pending.propTypes = {
    todos: array.isRequired,
};

export default Pending;
