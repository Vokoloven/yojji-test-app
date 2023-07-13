import { useFonts } from './hooks';
import CssBaseline from '@mui/material/CssBaseline';

export const App = () => {
    useFonts();

    return (
        <>
            <CssBaseline />
            <div>Here we go</div>
        </>
    );
};
