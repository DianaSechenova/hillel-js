import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("todos")) || [];
    setItems(storedItems);
  }, []);

  const handleSubmit = (value) => {
    saveToLocalStorage(value);
  };

  const saveToLocalStorage = (value) => {
    const id = Math.floor(Math.random() * 100);
    const existingItems = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedItems = [...existingItems, { id, value }];
    localStorage.setItem('todos', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <ToDoForm handleSubmit={handleSubmit} />
        <ToDoList items={items} setItems={setItems} />
      </Container>
    </div>
  );
}

export default App;
