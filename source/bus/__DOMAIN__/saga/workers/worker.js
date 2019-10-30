// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../instruments/mockREST';
import { uiActions } from '../../../ui/actions';

export function* worker () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.todos.fetch);
        const { data: todos, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error('Something went wrong...');
        }

    } catch (error) {
        yield put(uiActions.emitError(error, 'worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}