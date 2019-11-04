// Routes
import {
    getFilteredTodos,
    postTodo,
    getTodo,
    deleteTodo
} from './routes';

// Instruments
import { mockError } from './helpers';

const mockServer = (route, options) => {
    switch (route) {
        case '/get/todos':
            return getFilteredTodos(options);

        case '/post/todo':
            return postTodo(options);

        case '/get/todo':
            return getTodo(options);

        case '/delete/todo':
            return deleteTodo(options);

        default:
            return mockError();
    }
};

export default mockServer;
