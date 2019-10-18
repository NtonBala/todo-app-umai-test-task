// Core
import moment from 'moment';
import { useLocation } from 'react-router-dom';

export const formatDate = (unixSeconds) =>
    moment.unix(unixSeconds).format('dddd MMMM Do H:mm');

export const useQuery = () =>
    new URLSearchParams(useLocation().search);
