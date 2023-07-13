import { useEffect, useState, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDate } from '@/hooks';
import { fetchNeo } from '@/redux/service';
import { selectNeoItems } from '@/redux/selectors/selectNeoItems';
import { handleAggregatedData } from '@/helpers/handleAggregatedData';

export const useFetchData = () => {
    const dispatch = useDispatch();
    const isFirstRender = useRef(true);
    const {
        data: { near_earth_objects: neo },
    } = useSelector(selectNeoItems);
    const date = useDate();
    const [aggregatedData, setAggregatedData] = useState([]);

    const getMemorized = useMemo(async () => {
        if (isFirstRender.current) {
            const data = await dispatch(fetchNeo(date));

            console.log(data);
        }
    }, []);

    useEffect(() => {

        getMemorized
    }, []);

    // useEffect(() => {
    //     // if (isFirstRender.current) {
    //     //     return () => {
    //     //         isFirstRender.current = false;
    //     //     };
    //     // } else {
    //     //     dispatch(fetchNeo(date));
    //     // }
    //     if (isFirstRender.current) {
    //         dispatch(fetchNeo(date));
    //         return () => {
    //             isFirstRender.current = false;
    //         };
    //     }
    // }, [dispatch]);

    console.log(aggregatedData);
};
