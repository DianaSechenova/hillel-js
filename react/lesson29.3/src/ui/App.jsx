import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import AviableTodos from "./components/AviableTodos";
import { Container } from "@mui/material";
import { Provider } from "react-redux";
import { store } from '../core/store';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <ToDoForm />
        <ToDoList />
        <AviableTodos />
      </Container>
    </Provider>
  );
}

export default App;
