import { useEffect, useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useDate } from '@/hooks';
import { fetchNeo } from '@/redux/service';
import { handleAggregatedData } from '@/helpers/';

export const useFetchData = () => {
    const dispatch = useDispatch();
    const isFirstRender = useRef(true);

    const date = useDate();
    const [aggregatedData, setAggregatedData] = useState([]);

    const getData = useCallback(async () => {
        const response = await dispatch(fetchNeo(date));

        const handleData = handleAggregatedData(response.payload, date);
        console.log(handleData);

        if (response.type === 'neo/fetchNeoItem/fulfilled') {
            setAggregatedData((prevState) => [handleData, ...prevState]);
        }
    }, [date, dispatch]);

    useEffect(() => {
        if (isFirstRender.current) {
            return () => {
                isFirstRender.current = false;
            };
        } else {
            getData();
        }
    }, [getData]);

    // useEffect(() => {
    //     const getDate = async () => {
    //         const data = await dispatch(fetchNeo(date));

    //         const handleData = handleAggregatedData(data.payload, date);

    //         console.log(handleData);

    //         if (data.type === 'neo/fetchNeoItem/fulfilled') {
    //             setAggregatedData((prevState) => [handleData, ...prevState]);
    //         }
    //     };

    //     if (isFirstRender.current) {
    //         return () => {
    //             isFirstRender.current = false;
    //         };
    //     } else {
    //         getDate();
    //     }
    // }, [date, dispatch]);

    return aggregatedData;
};
