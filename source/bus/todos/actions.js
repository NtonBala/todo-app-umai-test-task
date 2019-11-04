// Types
import { types } from './types';

export const todosActions = {
    // Sync
    fillTodos: (todos) => {
        return {
            type:    types.FILL_TODOS,
            payload: todos,
        };
    },

    removeTodo: (todoId) => {
        return {
            type:    types.REMOVE_TODO,
            payload: todoId,
        };
    },

    // Async
    fetchTodosAsync: (filter) => {
        return {
            type:    types.FETCH_TODOS_ASYNC,
            payload: filter,
        };
    },

    createTodoAsync: (todo) => {
        return {
            type:    types.CREATE_TODO_ASYNC,
            payload: todo,
        };
    },

    removeTodoAsync: (todoId) => {
        return {
            type:    types.REMOVE_TODO_ASYNC,
            payload: todoId,
        };
    },
};
