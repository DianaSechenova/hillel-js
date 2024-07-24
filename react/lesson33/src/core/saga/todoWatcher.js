import {takeEvery} from 'redux-saga/effects'
import {todoAsyncAction} from "./asyncActions.js"
import {
    callCheckedTodoItemWorker,
    callEditTodoItemWorker,
    callGetTodoItemWorker,
    callRemoveTodoItemWorker, callResetAllTodoItemWorker, callSaveEditTodoItemWorker,
    initializeFromLocalStorageWorker
} from "./totoWrkers.js";
export function* todoWatcher() {
    yield takeEvery(todoAsyncAction.getTiDoItem.type, callGetTodoItemWorker )
    yield takeEvery(todoAsyncAction.removeTiDoItem.type, callRemoveTodoItemWorker )
    yield takeEvery(todoAsyncAction.initTodos().type, initializeFromLocalStorageWorker )
    yield takeEvery(todoAsyncAction.editToDoItem().type, callEditTodoItemWorker )
    yield takeEvery(todoAsyncAction.saveEditToDoItem().type, callSaveEditTodoItemWorker )
    yield takeEvery(todoAsyncAction.checkedToDoItem().type, callCheckedTodoItemWorker )
    yield takeEvery(todoAsyncAction.resetAllToDoItem().type, callResetAllTodoItemWorker )
}