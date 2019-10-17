// Core
import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner } from '../components';

// Instruments
import { book } from '../navigation/book';

export default class Trash extends Component {
    render () {
        return (
            <Catcher>
                <Tab.Pane eventKey = { book.trash }>
                    <Spinner />
                    <h1>Trash</h1>
                </Tab.Pane>
            </Catcher>
        );
    }
}
