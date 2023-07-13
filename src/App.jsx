import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useFonts } from '@/hooks';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';

const CustomAppBar = lazy(() => import('@/components/AppBar'));
const Home = lazy(() => import('@/pages/Home'));

export const App = () => {
    useFonts();

    return (
        <>
            <CssBaseline />
            <Suspense fallback={<Box>Loading...</Box>}>
                <Container maxWidth={'xl'}>
                    <Routes>
                        <Route path={'/'} element={<CustomAppBar />}>
                            <Route index element={<Home />} />
                        </Route>
                    </Routes>
                </Container>
            </Suspense>
        </>
    );
};
