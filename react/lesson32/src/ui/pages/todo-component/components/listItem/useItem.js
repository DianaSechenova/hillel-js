import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {todoAsyncAction} from "../../../../../core/saga/asyncActions.js";
import selectors from "../../../../../core/selectors.js";

export function useItem(id, defaultValue) {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(defaultValue);
    const isLoading = useSelector(selectors.loading);
    const onRemove = () => {
        dispatch(todoAsyncAction.removeToDoItem(id))
    }

    const onChecked = (event) => {
        dispatch(todoAsyncAction.checkedToDoItem({ id, value: event.target.checked }));
    }

    const onEdit = () => {
        dispatch(todoAsyncAction.editToDoItem(id ))
    }

    const onSave = () => {
        dispatch(todoAsyncAction.saveEditToDoItem({ id, newText: inputValue }));
    }

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    return {
        onRemove,
        onChecked,
        onEdit,
        onSave,
        isLoading,
        inputValue,
        onChangeInput
    }
}
