// Instruments
import mockFetch from './mockFetch';

export const api = {
    todos: {
        fetch (filter) {
            return mockFetch('/get/todos', { filter });
        },

        create (todo) {
            return mockFetch('/post/todo', { todo });
        },

        remove (todoId) {
            return mockFetch('/delete/todo', { todoId });
        },
    },
};
