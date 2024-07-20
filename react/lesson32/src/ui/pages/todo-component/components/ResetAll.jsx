import {Button, Stack} from "@mui/material";
import {useDispatch} from "react-redux";
import {todoAsyncAction} from "../../../../core/saga/asyncActions.js";

export default function ResetAll() {
    const dispatch = useDispatch();

    const onReset = () => {
        dispatch(todoAsyncAction.resetAllToDoItem());
    }

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
        <Button variant="contained" color="secondary"  size="large" onClick={onReset}>
            Clear All
        </Button>
        </Stack>
    )
}