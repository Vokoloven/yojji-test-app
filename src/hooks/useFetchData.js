import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNeo } from '@/redux/service';
import { handleAggregatedData } from '@/helpers/';
import { useDate } from '@/hooks';

export const useFetchData = () => {
    const date = useDate();
    const dispatch = useDispatch();
    const [aggregatedData, setAggregatedData] = useState([]);

    // const getData = useCallback(async () => {
    //     const response = await dispatch(fetchNeo(date));

    //     const handleData = handleAggregatedData(response.payload, date);

    //     if (response.type === 'neo/fetchNeoItem/fulfilled') {
    //         setAggregatedData((prevValue) => [handleData, ...prevValue]);
    //     }
    // }, [date, dispatch]);

    // useEffect(() => {
    //     getData();
    // }, [getData]);

    useEffect(() => {
        const getDate = async () => {
            const data = await dispatch(fetchNeo(date));

            const handleData = handleAggregatedData(data.payload, date);

            setAggregatedData((prevState) => [...prevState, handleData]);
        };

        getDate();
    }, [date, dispatch]);

    const test = [...aggregatedData].sort((a, b) => b.id - a.id).slice(0, 6);

    return test;
};
