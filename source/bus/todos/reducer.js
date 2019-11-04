// Core
import { fromJS, List } from 'immutable';

// Types
import { types } from './types';

const initialState = List();

export const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FILL_TODOS:
            return fromJS(payload);

        case types.REMOVE_TODO:
            return state.filter((todo) => todo.get('id') !== payload);

        default:
            return state;
    }
};
