// Core
import { createStore } from 'redux';

// Roots
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

// Middleware
import { enhancer, sagaMiddleware } from './middleware/core';

export const store = createStore(
    rootReducer,
    enhancer
);

// should be placed after redux store is created!!!
sagaMiddleware.run(rootSaga);
