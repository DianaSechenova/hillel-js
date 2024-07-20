import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {Paper} from "@mui/material";

function Header() {
    return (
            <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt="Your Name" src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80, mr: 2 }} />
                    <Box>
                        <Typography variant="h4">Diana Budiak</Typography>
                        <Typography variant="subtitle1" color="text.secondary">Frontend developer</Typography>
                    </Box>
                </Box>
            </Paper>
    );
}

export default Header;
