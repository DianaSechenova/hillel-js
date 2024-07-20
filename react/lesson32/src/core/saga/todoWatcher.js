import {takeEvery} from 'redux-saga/effects'
import {
    callCheckedTodoItemWorker,
    callEditTodoItemWorker,
    callGetTodoItemWorker,
    callRemoveTodoItemWorker, callResetAllTodoItemWorker, callSaveEditTodoItemWorker,
    initializeFromLocalStorageWorker
} from "./todoWrkers.js";
import {todoAsyncAction} from "./asyncActions.js";

export function* todoWatcher() {
    yield takeEvery(todoAsyncAction.getToDoItem().type, callGetTodoItemWorker )
    yield takeEvery(todoAsyncAction.resetAllToDoItem().type, callRemoveTodoItemWorker )
    yield takeEvery(todoAsyncAction.initTodos.type, initializeFromLocalStorageWorker )
    yield takeEvery(todoAsyncAction.editToDoItem.type, callEditTodoItemWorker )
    yield takeEvery(todoAsyncAction.saveEditToDoItem.type, callSaveEditTodoItemWorker )
    yield takeEvery(todoAsyncAction.checkedToDoItem.type, callCheckedTodoItemWorker )
    yield takeEvery(todoAsyncAction.resetAllToDoItem.type, callResetAllTodoItemWorker )
}