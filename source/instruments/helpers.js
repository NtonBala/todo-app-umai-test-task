// Core
import moment from 'moment';

export const formatDate = (unixSeconds) =>
    moment.unix(unixSeconds).format('dddd MMMM Do H:mm');
