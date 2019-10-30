// Core
import { object, string, boolean, number } from 'yup';

// Instruments
import { unixDueDate, unixDateCompleted } from '../../instruments';

export const createEdit = {
    shape: {
        text:          '',
        completed:     false,
        removed:       false,
        dueDate:       unixDueDate(),
        dateCompleted: unixDateCompleted(),
    },
    schema: object().shape({
        text: string()
            .min(3)
            .required(),
        completed:     boolean(),
        removed:       boolean(),
        dueDate:       number(),
        dateCompleted: number(),
    }),
};
