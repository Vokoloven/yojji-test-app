/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { BasicCard } from 'components/Card';

export const ResponsiveGrid = ({ data, sorted }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {data?.length > 0 &&
                    data.map((item) => (
                        <Grid item xs={4} sm={4} md={4} key={item.id}>
                            <BasicCard item={item} sorted={sorted} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};
