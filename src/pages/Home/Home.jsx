import { Box } from '@mui/material';
import { ResponsiveGrid } from '@/components/Grid';
import { useFetchData } from '@/hooks/useFetchData';

const Home = () => {
    const data = useFetchData();

    return (
        <Box sx={{ mt: 3 }}>
            <ResponsiveGrid data={data} />
        </Box>
    );
};

export default Home;
