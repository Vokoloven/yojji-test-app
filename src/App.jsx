import { useFonts } from './hooks';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import CustomAppBar from './components/AppBar';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchNeo } from '@redux/service';
// import { firstDayOfMonth, currentDate } from './helpers/dates';
import { useDate } from '@/hooks';

export const App = () => {
    // const dispatch = useDispatch();
    useFonts();
    console.log(useDate());

    // useEffect(() => {
    //     dispatch(fetchNeo({ firstDayOfMonth, currentDate }));
    // }, [dispatch]);

    return (
        <>
            <CssBaseline />
            <Routes>
                <Route path={'/'} element={<CustomAppBar />} />
            </Routes>
        </>
    );
};
