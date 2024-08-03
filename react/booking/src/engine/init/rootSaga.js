import {all, call} from 'redux-saga/effects'
import {destinationWatcher} from "../core/destination/saga/watcher.js";
import {hotelsWatcher} from "../core/hotels/saga/watcher.js";

export function* rootSaga() {
    yield all([
        call(destinationWatcher),
        call(hotelsWatcher)
    ])
}
