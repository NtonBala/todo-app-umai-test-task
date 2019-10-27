// Core
import { object, string, boolean, number } from 'yup';

// Instruments
import { getTodayDate, getUnixDueDate } from '../../instruments';

export const createEdit = {
    shape: {
        text:          '',
        completed:     false,
        dueDate:       getUnixDueDate(),
        dateCompleted: getTodayDate(),
    },
    schema: object().shape({
        text: string()
            .min(3)
            .required(),
        completed:     boolean(),
        dueDate:       number(),
        dateCompleted: number(),
    }),
};
