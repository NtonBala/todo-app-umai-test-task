// Core
import React from 'react';
import { array } from 'prop-types';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner, Feed } from '../components';

// Instruments
import { book } from '../navigation/book';
import { mockedTodos } from '../instruments/mockedData';

const Trash = ({ todos }) => {
    const removedTodos = todos.filter((todo) => {
        return todo.removed;
    });

    return (
        <Catcher>
            <Spinner />

            <Tab.Pane eventKey = { book.trash }>
                <h2>Trash:</h2>

                <Feed todos = { removedTodos } />
            </Tab.Pane>
        </Catcher>
    );
};

Trash.defaultProps = {
    todos: mockedTodos.toJS(),
};

Trash.propTypes = {
    todos: array.isRequired,
};

export default Trash;
