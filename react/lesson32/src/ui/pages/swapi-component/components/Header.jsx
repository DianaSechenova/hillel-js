import {Typography, Box} from "@mui/material";

function Header() {
  return (
      <Box component="header" sx={{ mt: 2 }}>
          <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>SWAPI</Typography>
      </Box>
  );
}

export default Header; 