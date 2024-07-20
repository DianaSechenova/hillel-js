import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Link} from "@mui/material";


function Footer() {

    return (
        <Box component="footer" sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: '#fff',
            boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
        }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', p: 1, alignItems: 'flex-start', justifyContent: 'space-around', fontSize: 14 }}>
                    <Typography variant="h5" gutterBottom>Contact</Typography>
                    <Box sx={{ fontSize: 14 }}>
                        <Typography sx={{ fontSize: 14 }} variant="body1">Email: <Link href="mailto:your.email@example.com">your.email@example.com</Link></Typography>
                        <Typography sx={{ fontSize: 14 }} variant="body1">Phone: (123) 456-7890</Typography>
                        <Typography sx={{ fontSize: 14 }} variant="body1">GitHub: <Link href="https://github.com/yourusername" target="_blank">github.com/yourusername</Link></Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;