// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { fetchTodos } from './workers';
import { createTodo } from './workers';

function* watchFetchTodos () {
    yield takeEvery(types.FETCH_TODOS_ASYNC, fetchTodos);
}

function* watchCreateTodo () {
    yield takeEvery(types.CREATE_TODO_ASYNC, createTodo);
}

export function* watchTodos () {
    yield all([
        call(watchFetchTodos),
        call(watchCreateTodo)
    ]);
}
