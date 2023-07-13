import { useEffect, useState } from 'react';
// import moment from 'moment';

// const date = new Date();
// const today = moment();

export const useDate = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((prevState) => );
        }, 2000);

        return () => {
            clearInterval(id);
        };
    }, []);

    console.log(count);
};
