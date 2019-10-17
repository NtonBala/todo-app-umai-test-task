// Core
import { List, Map } from 'immutable';
import moment from 'moment';

export const mockedProfile = List([
    Map({
        id:        'TODO_ID',
        completed: false,
        removed:   false,
        test:      'Todo text',
        dueDate:   moment().format('X'),
    })
]);
