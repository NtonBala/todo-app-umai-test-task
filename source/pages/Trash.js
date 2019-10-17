// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner } from '../components';

export default class Trash extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <h1>Trash</h1>
            </Catcher>
        );
    }
}
