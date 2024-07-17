import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./saga/rootSaga.js";

export const sagaMiddleware = createSagaMiddleware();
