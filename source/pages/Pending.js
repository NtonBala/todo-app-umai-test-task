// Core
import React, { useEffect } from 'react';
import { array, object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner, Feed } from '../components';

// Instruments
import { book } from '../navigation/book';

// Actions
import { todosActions } from '../bus/todos/actions';

const Pending = ({ todos, actions }) => {
    useEffect(() => {
        actions.fetchTodosAsync('pending');
    }, []);

    return (
        <Catcher>
            <Spinner />

            <Tab.Pane eventKey = { book.pending }>
                <h2>Pending Todo Items:</h2>

                <Feed todos = { todos } />
            </Tab.Pane>
        </Catcher>
    );
};

Pending.propTypes = {
    actions: object.isRequired,
    todos:   array.isRequired,
};

const mapState = (state) => {
    return {
        todos: state.todos.toJS(),
    };
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            fetchTodosAsync: todosActions.fetchTodosAsync,
        }, dispatch),
    };
};

export default connect(
    mapState,
    mapDispatch
)(Pending);
