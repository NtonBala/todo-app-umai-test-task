// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../instruments/mockREST';
import { uiActions } from '../../../ui/actions';
import { todosActions } from '../../actions';

export function* fetchTodos ({ payload: filter }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.todos.fetch, [filter]);
        const { data: todos, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(todosActions.fillTodos(todos));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchTodos'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
