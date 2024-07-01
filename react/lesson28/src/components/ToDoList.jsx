/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText, Divider, Button } from "@mui/material";
import { Fragment } from "react";

export default function ToDoList({ items, removeItem }) {

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360}} >
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <ListItem>
              <ListItemText primary={`${index +1}) ${item.value}`} />
              <Button variant="outlined" color="error" onClick={() => removeItem(item.id)}>delete</Button>
            </ListItem>
            {index < items.length - 1 && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </div>
  );
}

