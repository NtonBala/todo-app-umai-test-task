// Core
import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner } from '../components';

// Instruments
import { book } from '../navigation/book';

export default class CreateEdit extends Component {
    render () {
        return (
            <Catcher>
                <Tab.Pane eventKey = { book.createEdit }>
                    <Spinner />
                    <h1>Create/Edit</h1>
                </Tab.Pane>
            </Catcher>
        );
    }
}
