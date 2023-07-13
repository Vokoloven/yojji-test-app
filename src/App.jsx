import { useFonts } from './hooks';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import CustomAppBar from './components/AppBar';
import { useFetchData } from '@/hooks/useFetchData';

export const App = () => {
    useFonts();
    useFetchData();

    return (
        <>
            <CssBaseline />
            <Routes>
                <Route path={'/'} element={<CustomAppBar />} />
            </Routes>
        </>
    );
};
