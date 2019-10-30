// Instruments
import mockServer from './server';

const mockFetch = (...args) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = mockServer(...args);

            resolve(response);
        }, 600);
    });
};

export default mockFetch;
