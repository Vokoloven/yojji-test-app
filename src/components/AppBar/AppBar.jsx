import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

export default function CustomAppBar() {
    return (
        <Box as={'header'} sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: purple[500] }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        NASA APIs
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
