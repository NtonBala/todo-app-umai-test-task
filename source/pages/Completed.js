// Core
import React from 'react';
import { array } from 'prop-types';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner, Feed } from '../components';

// Instruments
import { book } from '../navigation/book';
import { mockedTodos } from '../instruments/mockedData';

const Completed = ({ todos }) => {
    const completedTodos = todos.filter((todo) => {
        return !todo.removed && todo.completed;
    });

    return (
        <Catcher>
            <Spinner />

            <Tab.Pane eventKey = { book.completed }>
                <h2>Completed Todo Items:</h2>

                <Feed todos = { completedTodos } />
            </Tab.Pane>
        </Catcher>
    );
};

Completed.defaultProps = {
    todos: mockedTodos.toJS(),
};

Completed.propTypes = {
    todos: array.isRequired,
};

export default Completed;
