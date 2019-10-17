// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// Instruments
import { store } from './init/store';
import { history } from './init/middleware/core';
import './theme/init';

// App
import App from './navigation/App';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store = { store }>
        <Router history = { history } >
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
