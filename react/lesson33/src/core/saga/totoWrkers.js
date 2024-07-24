import {put, select, delay} from "redux-saga/effects"
import {setLoading, addItem, setItems} from "../slises/todoSlise"

function* saveStateToLocalStorage() {
    const state = yield select(state => state.todo);
    localStorage.setItem('todoState', JSON.stringify(state));
}
function* initializeFromLocalStorageWorker() {
    try {
        const serializedState = localStorage.getItem('todoState');
        if (serializedState !== null) {
            const state = JSON.parse(serializedState);
            yield put(setItems(state.items));
        }
    } catch (e) {
        console.error(e);
    }
}
function* callGetTodoItemWorker(action) {
    const {payload} = action;

    yield put(setLoading(true))
    yield put(addItem(payload))
    yield saveStateToLocalStorage();
    yield put(setLoading(false))
}

function* callRemoveTodoItemWorker(action) {
    const { payload: id } = action;

    yield put(setLoading(true));
    yield delay(2000);
    const items = yield select(state => state.todo.items);
    const newArray = items.filter(item => item.id !== id);
    yield put(setItems(newArray));
    yield saveStateToLocalStorage();
    yield put(setLoading(false));
}

function* callEditTodoItemWorker(action) {
    const { payload: id } = action;
    const items = yield select(state => state.todo.items);
    yield put(setLoading(true));
    yield delay(2000);

    const newArray = items.map(item => {
        if (item.id === id) {
            return {...item, edit: !item.edit}
        } else {
            return item;
        }
    });
    yield put(setItems(newArray));
    yield saveStateToLocalStorage();
    yield put(setLoading(false));
}

function* callSaveEditTodoItemWorker(action) {
    const { payload } = action;
    const { id, newText } = payload;
    const items = yield select(state => state.todo.items);
    yield put(setLoading(true));
    yield delay(2000);

    const newArray = items.map(item => {
        if (item.id === id) {
            return {...item, text: newText, edit: false}
        } else {
            return item;
        }
    });
    yield put(setItems(newArray));
    yield saveStateToLocalStorage();
    yield put(setLoading(false));
}

function* callCheckedTodoItemWorker(action) {
    const { payload } = action;
    const { id, value } = payload;
    const items = yield select(state => state.todo.items);

    yield put(setLoading(true));
    yield delay(2000);

    const newArray = items.map(item => {
        if (item.id === id) {
            return {...item, checked: value}
        } else {
            return item;
        }
    });
    yield put(setItems(newArray));
    yield saveStateToLocalStorage();
    yield put(setLoading(false));
}

function* callResetAllTodoItemWorker() {
    yield put(setLoading(true))
    yield put(setItems([]));
    yield saveStateToLocalStorage();
    yield put(setLoading(false))
}


export {
    callGetTodoItemWorker,
    callRemoveTodoItemWorker,
    initializeFromLocalStorageWorker,
    callEditTodoItemWorker,
    callSaveEditTodoItemWorker,
    callCheckedTodoItemWorker,
    callResetAllTodoItemWorker
}