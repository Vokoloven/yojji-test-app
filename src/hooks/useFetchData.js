import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNeo } from 'redux/service';
import { handleAggregatedData } from 'helpers/';
import { useDate } from 'hooks';

export const useFetchData = () => {
    const date = useDate();
    const dispatch = useDispatch();
    const [aggregatedData, setAggregatedData] = useState([]);

    const getData = useCallback(async () => {
        const response = await dispatch(fetchNeo(date));

        const handleData = handleAggregatedData(response.payload, date);

        if (response.type === 'neo/fetchNeoItem/fulfilled') {
            setAggregatedData((prevValue) => [handleData, ...prevValue]);
        }
    }, [date, dispatch]);

    useEffect(() => {
        getData();
    }, [getData]);

    const sorted = [...aggregatedData].sort((a, b) => b.id - a.id).slice(0, 6);

    return sorted;
};
