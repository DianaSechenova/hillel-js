import { Container } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../shared/model/themeContext";
import ToDoForm from "../../feature/ToDo/ui/ToDoForm.jsx";
import ToDoList from "../../feature/ToDo/ui/ToDoList.jsx";

function Main() {
  const [theme] = useContext(ThemeContext);
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("todos")) || [];
    setItems(storedItems);
  }, []);

  const onChangeText = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    saveToLocalStorage(text);
    setText('');
  };

  const saveToLocalStorage = (value) => {
    const id = Math.floor(Math.random() * 100);
    const existingItems = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedItems = [...existingItems, { id, value }];
    localStorage.setItem('todos', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  return (
    <div style={{ color: theme.color }}>
      <Container maxWidth="sm">
        <ToDoForm onChangeText={onChangeText} handleSubmit={handleSubmit} />
        <ToDoList items={items} setItems={setItems} />
      </Container>
    </div>
  );
}

export default Main;
