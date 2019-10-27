// Core
import { object, string, boolean, number } from 'yup';

// Instruments
import { getTodayDate } from '../../instruments';

export const createEdit = {
    shape: {
        text:          '',
        completed:     false,
        dueDate:       new Date(),
        dateCompleted: getTodayDate(),
    },
    schema: object().shape({
        text: string()
            .min(3),
        completed:     boolean(),
        dueDate:       number(),
        dateCompleted: number(),
    }),
};
