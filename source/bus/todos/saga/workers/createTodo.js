// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../instruments/mockREST';
import { uiActions } from '../../../ui/actions';

export function* createTodo ({ payload: todoValues }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.todos.create, [todoValues]);
        const { message } = yield apply(response, response.json);

        if (response.status !== 204) {
            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error, 'createTodo worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
