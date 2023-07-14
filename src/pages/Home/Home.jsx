import { Box } from '@mui/material';
import { ResponsiveGrid } from '@/components/Grid';
import { useFetchData } from '@/hooks/useFetchData';
import { sortedByNumHazards } from '@/helpers/sortedByNumHazards';

const Home = () => {
    const data = useFetchData();
    const sorted = sortedByNumHazards(data);

    return (
        <Box sx={{ mt: 3 }}>
            <ResponsiveGrid data={data} sorted={sorted} />
        </Box>
    );
};

export default Home;
