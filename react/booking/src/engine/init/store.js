import {configureStore} from "@reduxjs/toolkit";
import {createReduxHistoryContext} from 'redux-first-history';
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga';
import destination from "../core/destination/slice.js";
import {rootSaga} from "./rootSaga.js";

const {routerReducer, routerMiddleware, createReduxHistory} = createReduxHistoryContext({
    history: createBrowserHistory()
})

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        router: routerReducer,
        destination: destination.reducer
    },
    middleware: (getDefaultMiddleware) =>  [...getDefaultMiddleware(), sagaMiddleWare, routerMiddleware]
})

sagaMiddleWare.run(rootSaga)

export const history = createReduxHistory(store);
