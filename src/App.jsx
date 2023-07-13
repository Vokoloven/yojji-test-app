import { useFonts } from './hooks';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import CustomAppBar from './components/AppBar';
import { firstDayOfMonth } from './helpers/dates';

console.log(firstDayOfMonth);

export const App = () => {
    useFonts();

    return (
        <>
            <CssBaseline />
            <Routes>
                <Route path={'/'} element={<CustomAppBar />} />
            </Routes>
        </>
    );
};
