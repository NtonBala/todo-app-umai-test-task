// Core
import React, { Component } from 'react';

// Components
import { Catcher, Spinner } from '../components';

export default class CreateEdit extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <h1>Create/edit</h1>
            </Catcher>
        );
    }
}
