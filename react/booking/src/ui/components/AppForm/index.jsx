import {Field, Form} from "react-final-form";
import {Box, Grid} from "@mui/material";
import Button from "../Buttons/index.jsx";
import Select from "./components/Select.jsx";
import Input from "./components/Input.jsx";
import DatePicker from "./components/DatePicker.jsx";
import {useDestination} from "./hooks/useDestination.js";
import validate from "../../../engine/helpers/form.js";

export default function AppForm() {
    const {items, loading, handleSubmit} = useDestination()
    return (
        <Form
            onSubmit={handleSubmit}
            render={({handleSubmit}) => {
                return (
                    <Box sx={{display: 'flex', gap: '30px'}} component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={3}>
                                <Field
                                    name="destination"
                                    label="Destination"
                                    component={Select}
                                    disabled={loading}
                                    options={items}
                                    validate={validate.required}
                                />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <Field
                                    name="check_in"
                                    label="Check in"
                                    component={DatePicker}
                                    fullWidth
                                    type="number"
                                    disabled={loading}
                                    validate={validate.required}
                                />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <Field
                                    name="check_out"
                                    label="Check out"
                                    component={DatePicker}
                                    fullWidth
                                    type="number"
                                    disabled={loading}
                                    validate={validate.required}
                                />
                            </Grid>
                            <Grid item xs={6} lg={1}>
                                <Field
                                    name="adult"
                                    label="Adult"
                                    component={Input}
                                    fullWidth
                                    type="number"
                                    disabled={loading}
                                    validate={validate.required}
                                    InputProps={{inputProps: {min: 0, max: 10}}}
                                />
                            </Grid>
                            <Grid item xs={6} lg={1}>
                                <Field
                                    name="children"
                                    label="Children"
                                    component={Input}
                                    type="number"
                                    fullWidth
                                    disabled={loading}
                                    InputProps={{inputProps: {min: 0, max: 10}}}
                                />
                            </Grid>
                            <Grid item xs={12} lg={1}>
                                <Button loading={loading} type="submit" sx={{width: '100%', height: '100%' }}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Box>
                )
            }}
        />
    )
}
