import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { useContext, Fragment } from "react";
import { ThemeContext } from "../../../shared/model/themeContext";

export default function ToDoList({ items }) {
  const [theme] = useContext(ThemeContext);

  return (
    <div style={{ color: theme.color }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: theme.bgcolor }} >
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <ListItem>
              <ListItemText primary={`${index}: ${item.value}`} />
            </ListItem>
            {index < items.length - 1 && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </div>
    
  );
}

