import moment from 'moment';

const date = new Date();
const today = moment();

export const firstDayOfMonth = moment(
    new Date(date.getFullYear(), date.getMonth(), 1)
).format('YYYY-MM-DD');

export const currentDate = today.format('YYYY-MM-DD');
