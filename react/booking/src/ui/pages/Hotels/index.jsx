import {useHotels} from "./hooks/useHotels.jsx";
import {Grid, Typography} from "@mui/material";
import HotelItem from "../../components/HotelItem/HotelItem.jsx";

function Hotels() {
    const { items } = useHotels();
    return (
        <>
            <Typography component="h1" variant="h3" gutterBottom>Hotels list</Typography>
            <Grid container>
                {items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id} sx={{ marginBottom: '30px' }}>
                        <HotelItem
                            address={item.address}
                            city={item.city}
                            countryCode={item.country_code}
                            name={item.name}
                            state={item.state}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Hotels;
