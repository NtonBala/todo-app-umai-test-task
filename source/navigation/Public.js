// Core
import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

// Instruments
import { book } from './book';

// Pages
import { Pending, Completed, Trash, CreateEdit } from '../pages';

// Components
import { NavItem } from '../components';

const Public = () => {
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
                            <NavItem pathId = { book.trash }>Trash</NavItem>

                        </Nav>
                    </Col>
                    <Col sm = { 9 }>
                        <Tab.Content>
                            <Switch>

                                <Route exact component = { Pending } path = { book.pending } />
                                <Route exact component = { Completed } path = { book.completed } />
                                <Route exact component = { Trash } path = { book.trash } />
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

export default Public;
