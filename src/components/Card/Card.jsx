/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { isHighestValue } from '@/helpers';

export const BasicCard = ({
    item: {
        estimated_diameter_max,
        is_potentially_hazardous_asteroid,
        miss_distance,
        relative_velocity,
        id,
    },
    sorted,
}) => {
    return (
        <Card
            sx={{
                minWidth: 275,
                bgcolor: isHighestValue(sorted, id) && red[200],
            }}
        >
            <CardContent>
                <Typography variat={'body2'}>
                    Max estimated diameter of NEO:{' '}
                    {estimated_diameter_max.toFixed(2)} km
                </Typography>
                <Typography variat={'body2'}>
                    Hazardous NEOs per day: {is_potentially_hazardous_asteroid}
                </Typography>
                <Typography variat={'body2'}>
                    Closest NEO: {miss_distance.toFixed(2)} km
                </Typography>
                <Typography variat={'body2'}>
                    Fastest NEO: {relative_velocity.toFixed(2)} kph
                </Typography>
            </CardContent>
        </Card>
    );
};
