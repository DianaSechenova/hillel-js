import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from "@mui/material/Divider";

function Skills() {
    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>Skills</Typography>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ my: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="JavaScript" color="primary" />
                <Chip label="jQury" color="primary" />
                <Chip label="React" color="primary" />
                <Chip label="Angular" color="primary" />
                <Chip label="PHP" color="primary" />
                <Chip label="Laravel" color="primary"  />
                <Chip label="Node.js" color="primary" />
                <Chip label="CSS" color="primary" />
                <Chip label="SCSS" color="primary" />
                <Chip label="Bootstrap" color="primary" />
                <Chip label="MUI" color="primary" />
                <Chip label="HTML" color="primary" />
                <Chip label="Git" color="primary" />
            </Box>
        </Box>
    );
}

export default Skills;
