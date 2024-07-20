import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function Experience() {
    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>Experience</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ my: 2 }}>
                <Typography variant="h6">Frontend Developer</Typography>
                <Typography variant="subtitle1" color="text.secondary">Bluefin</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    I perform tasks to support and develop existing functionality of web applications. I am responsible for identifying, analyzing and eliminating bugs, ensuring uninterrupted and high-quality operation of products. I actively participate in the implementation of new functions, helping to improve the user experience and increase the efficiency of the system.                </Typography>
            </Box>
        </Box>
    );
}

export default Experience;
