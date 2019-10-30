// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchTodos } from '../bus/todos/saga/watchers';

export function* rootSaga () {
    yield all([
        call(watchTodos)
    ]);
}
