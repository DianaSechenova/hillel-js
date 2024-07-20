import {Provider} from "react-redux";
import {store} from "../../../core/store.js";
import {Container} from "@mui/material";
import ToDoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";
import AviableTodos from "./components/AviableTodos.jsx";
import ResetAll from "./components/ResetAll.jsx";
import Box from "@mui/material/Box";

export function ToDoComponent() {
    return (
        <Provider store={store}>
            <Container maxWidth="sm">
                <ToDoForm />
                <ToDoList />
                <Box
                    sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1, alignItems: 'flex-end' }}
                >
                    <AviableTodos />
                    <ResetAll />
                </Box>
            </Container>
        </Provider>
    )
}