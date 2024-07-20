import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function Education() {
    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>Education</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ my: 2 }}>
                <Typography variant="h6">IT Step Academy</Typography>
                <Typography variant="subtitle1" color="text.secondary">Completed: 2022</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Focused on web development, covering JavaScript, PHP, and Laravel.
                    Gained hands-on experience in building dynamic web applications and learned best practices for coding and debugging.
                </Typography>
            </Box>
            <Box sx={{ my: 2 }}>
                <Typography variant="h6">Udemy</Typography>
                <Typography variant="subtitle1" color="text.secondary">Completed: 2021</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Completed a comprehensive Angular course. Learned how to develop robust single-page applications using Angular,
                    including state management, routing, and dependency injection.
                </Typography>
            </Box>
            <Box sx={{ my: 2 }}>
                <Typography variant="h6">Hillel IT School</Typography>
                <Typography variant="subtitle1" color="text.secondary">Completed: 2020</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    Specialized in advanced JavaScript and React. Covered topics such as modern JavaScript features,
                    component-based architecture, hooks, and state management with Redux.
                </Typography>
            </Box>
        </Box>
    );
}

export default Education;
