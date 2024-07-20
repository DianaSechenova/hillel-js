import {createAction} from "@reduxjs/toolkit";

export const todoAsyncAction = Object.freeze({
    getToDoItem: createAction('GET_TODO_ITEM'),
    removeToDoItem: createAction('REMOVE_TODO_ITEM'),
    initTodos: createAction('INIT_TODOS'),
    editToDoItem: createAction('EDIT_TODO_ITEM'),
    saveEditToDoItem: createAction('SAVE_EDIT_TODO_ITEM'),
    checkedToDoItem: createAction('CHECKED_TODO_ITEM'),
    resetAllToDoItem: createAction('RESET_ALL_TODO_ITEM')
})