import {Box, Typography} from "@mui/material";
import AppForm from "../components/AppForm";

function Main() {

    return (
        <>
            <AppForm />
            <Box component="h6" sx={{fontSize: '40px', lineHeight: 1, marginBottom: 2}}>
                Travel With <Box component="span" sx={{ color: 'primary.main' }}>Booking</Box>
            </Box>
            <Typography component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo at dolor eveniet, incidunt magnam, cupiditate quia magni accusantium provident quam rerum vel nam necessitatibus. Voluptas ipsam voluptate, aperiam adipisci officiis facilis distinctio earum consequuntur eius sequi, nam quasi incidunt qui consequatur necessitatibus quis illum quidem vel quod! Pariatur, aliquid!
            </Typography>
        </>
    )
}

export default Main

