// Core
import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner } from '../components';

// Instruments
import { book } from '../navigation/book';

export default class Completed extends Component {
    render () {
        return (
            <Catcher>
                <Tab.Pane eventKey = { book.completed }>
                    <Spinner />
                    <h1>Completed</h1>
                </Tab.Pane>
            </Catcher>
        );
    }
}
