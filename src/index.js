import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './container/App/index';

import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

import Reducer from "./reducers";

import initialState from './utils/initialState'

const logger = createLogger({timestamp: true})

const store = createStore(Reducer, initialState, compose(applyMiddleware(thunk, logger), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f),
/* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
