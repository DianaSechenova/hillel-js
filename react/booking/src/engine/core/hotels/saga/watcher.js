import {takeEvery} from 'redux-saga/effects'
import {callGetHotelsWorker} from "./worker.js";
import hotelsAsyncAction from "./asyncActions.js";

export function* hotelsWatcher() {
    yield takeEvery(hotelsAsyncAction.getHotelsAsync.type, callGetHotelsWorker)
}
