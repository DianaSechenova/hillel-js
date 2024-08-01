import {takeEvery} from 'redux-saga/effects'
import destinationAsyncAction from "./asyncActions.js";
import {callGetDestinationWorker} from "./worker.js";

export function* destinationWatcher() {
    yield takeEvery(destinationAsyncAction.getDestinationsAsync.type, callGetDestinationWorker)
}
