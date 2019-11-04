export const validateTodo = (todo) => {
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

export const validateTodoById = (todos, todoToRemoveId) => {
    return Boolean(todos.find((todo) => {
        return todo.id === todoToRemoveId;
    }));
};
