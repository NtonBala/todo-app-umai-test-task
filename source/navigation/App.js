// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';

// Routes;
import Public from './Public';

@hot(module)
@withRouter
export default class App extends Component {
    render () {
        return <Public />;
    }
}
