// Core
import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner } from '../components';

// Instruments
import { book } from '../navigation/book';

export default class Home extends Component {
    render () {
        return (
            <Catcher>
                <Tab.Pane eventKey = { book.home }>
                    <Spinner />
                    <h1>Home</h1>
                </Tab.Pane>
            </Catcher>
        );
    }
}
