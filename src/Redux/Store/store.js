import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import myReducer from '../Reducer/myReducer';
import rootSaga from '../Saga/rootSaga';

const sagaMidleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(myReducer,
    composeEnhancers(applyMiddleware(sagaMidleware)));
sagaMidleware.run(rootSaga);

export default store;