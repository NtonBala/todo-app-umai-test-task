// Core
import { object, string, boolean, number } from 'yup';

// Instruments
import { unixDueDate } from '../../instruments';

export const createEdit = {
    shape: {
        text:      '',
        completed: false,
        dueDate:   unixDueDate(),
    },
    schema: object().shape({
        text: string()
            .min(3)
            .required(),
        completed: boolean(),
        dueDate:   number(),
    }),
};
