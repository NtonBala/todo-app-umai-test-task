// Core
import uuidv1 from 'uuid/v1';

function MockResponse (status, responseData) {
    this.status = status;

    this.json = function () {
        return Promise.resolve(responseData);
    };
}

const getStoredTodos = () =>
    JSON.parse(localStorage.getItem('todos')) || [];

const validateTodo = (todo) => {
    return (
        typeof todo === 'object'
            && typeof todo.text === 'string'
            && typeof todo.completed === 'boolean'
            && typeof todo.removed === 'boolean'
            && todo.removed === false
            && Number.isInteger(todo.dueDate)
            && todo.dueDate > 0
            && Number.isInteger(todo.dateCompleted)
            && todo.dateCompleted > 0
    );
};

// General request error
export const mockError = () => {
    return new MockResponse(400, {
        message: 'The request is invalid or cannot be served',
    });
};

// Mocking server routing
export const getFilteredTodos = (options) => {
    const todos = getStoredTodos();
    const { filter } = options;

    switch (filter) {
        case 'pending':
            return new MockResponse(200, {
                data: todos.filter((todo) => {
                    return !todo.removed && !todo.completed;
                }),
                message: 'Request is successful, response body contains representation requested',
            });

        case 'completed':
            return new MockResponse(200, {
                data: todos.filter((todo) => {
                    return !todo.removed && todo.completed;
                }),
                message: 'Request is successful, response body contains representation requested',
            });

        case 'removed':
            return new MockResponse(200, {
                data: todos.filter((todo) => {
                    return todo.removed;
                }),
                message: 'Request is successful, response body contains representation requested',
            });

        default:
            return new MockResponse(400, {
                message: 'The request cannot be served, specify valid filter',
            });
    }
};

export const postTodo = (options) => {
    const todos = getStoredTodos();
    const { todo } = options;

    if (!validateTodo(todo)) {
        return new MockResponse(400, {
            message: 'The request cannot be served, provide valid todo data',
        });
    }

    const newTodo = {
        ...todo,
        id: uuidv1(),
    };

    todos.unshift(newTodo);

    localStorage.setItem('todos', JSON.stringify(todos));

    return new MockResponse(204, {
        data:    newTodo,
        message: 'The server has fulfilled the request',
    });
};

export const getTodo = (options) => {
    const todos = getStoredTodos();

    const requestedTodo = todos.find((todo) => {
        return todo.id === options.id;
    });

    if (requestedTodo) {
        return new MockResponse(200, {
            data:    requestedTodo,
            message: 'Request is successful, response body contains representation requested',
        });
    }

    return new MockResponse(400, {
        message: 'The request cannot be served, specify valid id',
    });
};
