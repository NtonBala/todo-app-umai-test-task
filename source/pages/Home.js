// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner } from '../components';

export default class Home extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <h1>Home</h1>
            </Catcher>
        );
    }
}
