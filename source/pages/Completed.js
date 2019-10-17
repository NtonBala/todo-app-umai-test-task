// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner } from '../components';

export default class Completed extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <h1>Completed</h1>
            </Catcher>
        );
    }
}
