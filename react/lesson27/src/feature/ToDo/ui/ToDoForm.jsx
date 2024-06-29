import { Button, TextField, Stack } from "@mui/material";

export default function ToDoForm({onChangeText, handleSubmit}) {

  const handleFormSubmit = (event) => {
    handleSubmit(event);
    event.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit} >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <TextField
          fullWidth
          label="To Do"
          name="text"
          type="text"
          onChange={onChangeText}
        />
        <Button variant="contained" type="submit" size="large">
          Add
        </Button>
      </Stack>
    </form>
  );
}
