// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Instruments
import { book } from './book';

// Pages
import { Home, Completed, Trash, CreateEdit } from '../pages';

export default class Public extends Component {
    render () {
        return (
            <Switch>

                <Route component = { Home } path = { book.home } />
                <Route component = { Completed } path = { book.completed } />
                <Route component = { Trash } path = { book.trash } />
                <Route component = { CreateEdit } path = { book.createEdit } />

                <Redirect to = { book.home } />

            </Switch>
        );
    }
}
