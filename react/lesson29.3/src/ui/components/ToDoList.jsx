import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from 'react-redux';
import selectors from '../../core/selectors';

export default function ToDoList() {
  const items = useSelector(selectors.items);

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <ListItem>
              <ListItemText primary={`${index + 1}) ${item.text}`} />
            </ListItem>
            {index < items.length - 1 && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </div>
  );
}
