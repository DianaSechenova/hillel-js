import {useDispatch} from 'react-redux';
import swapiSlice from "../../../../core/slises/swapiSlice.js";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";

function ButtonReset() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(swapiSlice.actions.clearResults());
    dispatch(swapiSlice.actions.clearAction())
  };

  return (
      <Box sx={{ mt: 2 }}>
        <Button onClick={handleReset} variant="contained" color="secondary">Clear</Button>
      </Box>  );
}

export default ButtonReset;
