/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Fragment } from "react";

export default function ToDoList({ items }) {

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360}} >
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <ListItem>
              <ListItemText primary={`${index +1}: ${item.value}`} />
            </ListItem>
            {index < items.length - 1 && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </div>
    
  );
}

