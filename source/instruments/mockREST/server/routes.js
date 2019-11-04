// Core
import uuidv1 from 'uuid/v1';

// Instruments
import { getStoredTodos, MockResponse, mockError } from './helpers';
import { validateTodo, validateTodoById } from './validators';

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
            return mockError(400, 'The request cannot be served, specify valid filter');
    }
};

export const postTodo = (options) => {
    const todos = getStoredTodos();

    const { todo } = options;

    if (!validateTodo(todo)) {
        return mockError(400, 'The request cannot be fulfilled, provide valid todo data');
    }

    const newTodo = {
        ...todo,
        id: uuidv1(),
    };

    const newTodos = [
        newTodo,
        ...todos
    ];

    localStorage.setItem('todos', JSON.stringify(newTodos));

    return new MockResponse(204, {
        message: 'The server has fulfilled the request',
    });
};

export const deleteTodo = (options) => {
    const todos = getStoredTodos();

    const { todoId: id } = options;

    if (!validateTodoById(todos, id)) {
        return mockError(400, 'The request cannot be fulfilled, specify valid id');
    }

    const newTodos = todos.filter((todo) => {
        return todo.id !== id;
    });

    localStorage.setItem('todos', JSON.stringify(newTodos));

    return new MockResponse(204, {
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

    return mockError(400, 'The request cannot be served, specify valid id');
};
