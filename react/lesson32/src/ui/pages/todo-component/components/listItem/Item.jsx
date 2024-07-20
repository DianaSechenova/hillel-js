import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import {Fragment} from "react";
import {useItem} from "./useItem.js";
import {Button} from "@mui/material";

export default function Item(props) {
    const {text, index, id, checked, edit } = props;
    const {onRemove, isLoading, onChecked, onEdit, onSave, inputValue, onChangeInput} = useItem(id, text);
    return (
        <>
            {index !== 0 && <Divider/>}
            <ListItem disablePadding> <ListItemButton  style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                    <Checkbox checked={checked} onChange={onChecked} disabled={isLoading}/>
                    {edit
                        ? (
                            <TextField variant="outlined" onInput={onChangeInput} defaultValue={inputValue}/>
                        ) : (
                            <ListItemText primary={text}/>
                        )}
                </div>
                <Button
                    variant="outlined"
                    disabled={isLoading}
                    onClick={edit ? onSave : onEdit}
                    style={{marginRight: '.5rem'}}
                >{edit ? 'Save' : 'Edit'}</Button>
                <Button
                    variant="outlined"
                    color="error"
                    disabled={isLoading}
                    onClick={onRemove}
                >{isLoading ? '...Loading' : 'Remove'}</Button>
            </ListItemButton> </ListItem>
        </>
    );
}