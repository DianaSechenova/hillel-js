import { useDispatch, useSelector } from 'react-redux';
import selectors from "../../../../core/swapiSelectors.js";
import {api} from "../../../../core/thunks/api.js";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {Button, InputAdornment} from "@mui/material";
import {useState} from "react";

function Form() {
  const dispatch = useDispatch();
  const isLoad = useSelector(selectors.loader);
  const defaultAction = useSelector(selectors.action);
  const [url, setUrl] = useState(defaultAction);
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(api(event.target.url.value))
  };

  return (
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
        <TextField
            name="url"
            label="API URL"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start">https://swapi.dev/api/</InputAdornment>,
            }}
            sx={{ mb: 2 }}
        />
        <Button disabled={isLoad} type="submit" variant="contained">Get info</Button>
      </Box>
  );
}

export default Form;