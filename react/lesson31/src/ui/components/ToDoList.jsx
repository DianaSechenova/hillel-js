import {List, Divider} from "@mui/material";
import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import selectors from '../../core/selectors';
import Item from "./listItem/Item.jsx";
import {todoAsyncAction} from "../../core/saga/asyncActions.js";

export default function ToDoList() {
    const dispatch = useDispatch();
    const items = useSelector(selectors.items);

    useEffect(() => {
        dispatch(todoAsyncAction.initTodos());
    }, [dispatch]);

  return (
    <div>
      <List sx={{ width: '100%' }}>
        {items.map((item, index) => (
          <Fragment key={item.id}>
              <Item
                  text={item.text}
                  index={index}
                  id={item.id}
                  checked={item.checked}
                  key={item.id}
                  edit={item.edit}
              />

            {index < items.length - 1 && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </div>
  );
}
