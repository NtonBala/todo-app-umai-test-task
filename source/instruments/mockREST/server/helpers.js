export const getStoredTodos = () =>
    JSON.parse(localStorage.getItem('todos')) || [];

// Mocking response
export function MockResponse (status, responseData) {
    this.status = status;

    this.json = function () {
        return Promise.resolve(responseData);
    };
}

export const mockError = (
    status = 404,
    message = 'The request is invalid or cannot be served'
) => {
    return new MockResponse(status, {
        message,
    });
};
