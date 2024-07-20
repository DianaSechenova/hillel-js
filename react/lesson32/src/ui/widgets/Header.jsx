import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "../shared/ui/Link.jsx";

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" sx={{ color: 'white', textDecoration: 'none' }}>About</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/todo" sx={{ color: 'white', textDecoration: 'none' }}>My ToDos</Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/swapi" sx={{ color: 'white', textDecoration: 'none' }}>My Swapi</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
