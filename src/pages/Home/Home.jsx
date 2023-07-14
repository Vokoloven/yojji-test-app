import { Box } from '@mui/material';
import { ResponsiveGrid } from '@/components/Grid';
import { useFetchData } from '@/hooks/useFetchData';
import { filterByNumHazards } from '@/helpers/filterByNumHazards';

const Home = () => {
    const data = useFetchData();
    const sorted = filterByNumHazards(data);

    return (
        <Box sx={{ mt: 3 }}>
            <ResponsiveGrid data={data} sorted={sorted} />
        </Box>
    );
};

export default Home;
