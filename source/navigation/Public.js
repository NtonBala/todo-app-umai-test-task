// Core
import React from 'react';
import { array, object } from 'prop-types';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

// Instruments
import { book } from './book';

// Pages
import { CreateEdit, TodosFeed } from '../pages';

// Components
import { NavItem } from '../components';

// Actions
import { todosActions } from '../bus/todos/actions';

const Public = ({ todos, actions }) => {
    const { pathname } = useLocation();

    return (
        <Container>
            <Tab.Container activeKey = { pathname }>
                <Row>
                    <Col sm = { 3 }>
                        <Nav className = 'flex-column' variant = 'pills'>

                            <NavItem pathId = { book.pending }>Pending</NavItem>
                            <NavItem pathId = { book.completed }>Completed</NavItem>
                            <NavItem pathId = { book.createEdit }>Create</NavItem>
                            <NavItem pathId = { book.removed }>Trash</NavItem>

                        </Nav>
                    </Col>
                    <Col sm = { 9 }>
                        <Tab.Content>
                            <Switch>

                                <Route
                                    exact
                                    path = { book.pending }
                                    render = { () => {
                                        return (
                                            <TodosFeed
                                                actions = { {
                                                    fetchTodosAsync: actions.fetchTodosAsync,
                                                } }
                                                filter = 'pending'
                                                pathname = { pathname }
                                                title = 'Pending Todos:'
                                                todos = { todos }
                                            />
                                        );
                                    } }
                                />

                                <Route
                                    exact
                                    path = { book.completed }
                                    render = { () => {
                                        return (
                                            <TodosFeed
                                                actions = { {
                                                    fetchTodosAsync: actions.fetchTodosAsync,
                                                } }
                                                filter = 'completed'
                                                title = 'Completed Todos:'
                                                todos = { todos }
                                            />
                                        );
                                    } }
                                />

                                <Route
                                    exact
                                    path = { book.removed }
                                    render = { () => {
                                        return (
                                            <TodosFeed
                                                actions = { {
                                                    fetchTodosAsync: actions.fetchTodosAsync,
                                                } }
                                                filter = 'removed'
                                                title = 'Trash:'
                                                todos = { todos }
                                            />
                                        );
                                    } }
                                />

                                <Route exact component = { CreateEdit } path = { book.createEdit } />

                                <Redirect to = { book.pending } />

                            </Switch>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

Public.propTypes = {
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
)(Public);
