import {Outlet} from 'react-router-dom'
import {ThemeProvider, createTheme, CssBaseline, Container} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import Header from "./Header/index.jsx";

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[500]
        }
    }
})

export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Container component="main" sx={{ marginTop: '120px' }}>
                <Outlet />
            </Container>
        </ThemeProvider>
    )
}
