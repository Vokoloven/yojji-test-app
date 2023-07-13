import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDate } from '@/hooks';
import { fetchNeo } from '@/redux/service';
import { handleAggregatedData } from '@/helpers/';

export const useFetchData = () => {
    const dispatch = useDispatch();
    const isFirstRender = useRef(true);

    const date = useDate();
    const [aggregatedData, setAggregatedData] = useState([]);

    useEffect(() => {
        const getDate = async () => {
            const data = await dispatch(fetchNeo(date));
            if (data.type === 'neo/fetchNeoItem/fulfilled') {
                setAggregatedData((prevState) => [
                    handleAggregatedData(data.payload, date),
                    ...prevState,
                ]);
            }
        };

        if (isFirstRender.current) {
            return () => {
                isFirstRender.current = false;
            };
        } else {
            getDate();
        }
    }, [date, dispatch]);

    return aggregatedData.slice(0, 6);
};
