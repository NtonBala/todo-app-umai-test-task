// Instruments
import {
    mockError,
    getFilteredTodos,
    postTodo,
    getTodo
} from './routes';

const mockServer = (route, options) => {
    switch (route) {
        case '/get/todos':
            return getFilteredTodos(options);

        case '/post/todo':
            return postTodo(options);

        case '/get/todo':
            return getTodo(options);

        default:
            return mockError();
    }
};

export default mockServer;
