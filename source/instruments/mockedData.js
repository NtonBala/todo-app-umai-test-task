// Core
import { List, Map } from 'immutable';
import uuidv1 from 'uuid/v1';

// Instruments
import { unixDueDate, unixDateCompleted } from '../instruments';

export const mockedTodos = List([
    Map({
        id:        uuidv1(),
        completed: false,
        removed:   false,
        text:      'Todo 1',
        dueDate:   unixDueDate(),
    }),
    Map({
        id:            uuidv1(),
        completed:     true,
        removed:       false,
        text:          'Todo 2',
        dateCompleted: unixDateCompleted(),
    }),
    Map({
        id:        uuidv1(),
        completed: false,
        removed:   true,
        text:      'Todo 3',
        dueDate:   unixDueDate(),
    })
]);
