import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

export let store = createStore(
    reducer,
    compose(
        applyMiddleware(promise, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
