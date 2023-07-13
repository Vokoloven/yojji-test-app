import { useEffect, useState } from 'react';
import moment from 'moment';

const date = new Date();
const today = Number(moment().format('D'));

export const useDate = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prevState) => (prevState > today ? 1 : prevState + 1));
        }, 50000000);
        return () => {
            clearInterval(id);
        };
    }, []);

    return moment(new Date(date.getFullYear(), date.getMonth(), count)).format(
        'YYYY-MM-DD'
    );
};
