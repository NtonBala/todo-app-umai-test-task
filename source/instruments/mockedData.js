// Core
import { List, Map } from 'immutable';
import uuidv1 from 'uuid/v1';

// Instruments
import { getTodayDate } from '../instruments';

export const mockedTodos = List([
    Map({
        id:        uuidv1(),
        completed: false,
        removed:   false,
        text:      'Todo 1',
        dueDate:   getTodayDate(),
    }),
    Map({
        id:            uuidv1(),
        completed:     true,
        removed:       false,
        text:          'Todo 2',
        dateCompleted: getTodayDate(),
    }),
    Map({
        id:        uuidv1(),
        completed: false,
        removed:   true,
        text:      'Todo 3',
        dueDate:   getTodayDate(),
    })
]);
