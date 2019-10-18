// Core
import { List, Map } from 'immutable';
import moment from 'moment';
import uuidv1 from 'uuid/v1';

export const mockedTodos = List([
    Map({
        id:        uuidv1(),
        completed: false,
        removed:   false,
        text:      'Todo 1',
        dueDate:   parseInt(moment().format('X'), 10),
    }),
    Map({
        id:            uuidv1(),
        completed:     true,
        removed:       false,
        text:          'Todo 2',
        dateCompleted: parseInt(moment().format('X'), 10),
    }),
    Map({
        id:        uuidv1(),
        completed: false,
        removed:   true,
        text:      'Todo 3',
        dueDate:   parseInt(moment().format('X'), 10),
    })
]);
