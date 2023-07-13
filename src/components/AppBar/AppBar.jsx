import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

export const CustomAppBar = () => {
    return (
        <>
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
            <Outlet />
        </>
    );
};

export default CustomAppBar;
