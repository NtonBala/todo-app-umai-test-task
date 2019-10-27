// Core
import moment from 'moment';
import { useLocation } from 'react-router-dom';

export const useQuery = () =>
    new URLSearchParams(useLocation().search);

// Dates
export const getTodayDate = () =>
    parseInt(moment().format('X'), 10);

export const getUnixDueDate = () =>
    parseInt(moment().add(1, 'day').hours(18).minutes(0).format('X'), 10);

export const formatDate = (unixSeconds) =>
    moment.unix(unixSeconds).format('dddd MMMM Do H:mm');
