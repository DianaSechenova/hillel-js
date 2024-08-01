import {takeEvery} from 'redux-saga/effects'
import destinationAsyncAction from "./asyncActions.js";
import {callGetDestinationWorker} from "./worker.js";

export function* hotelsWatcher() {
    yield takeEvery(hotelsAsyncAction.getHotelsAsync.type, callGetHotalsWorker)
}
