import { Box } from '@mui/material';
import { ResponsiveGrid } from '@/components/Grid';
import { useFetchData } from '@/hooks/useFetchData';
import { filterByNumHazards } from '@/helpers/filterByNumHazards';

const Home = () => {
    const data = useFetchData();
    // const test = [...data].sort((a, b) => b.id - a.id).slice(0, 6);
    const sorted = filterByNumHazards(data);

    console.log(sorted);

    return (
        <Box sx={{ mt: 3 }}>
            <ResponsiveGrid data={data} sorted={sorted} />
        </Box>
    );
};

export default Home;
