import { fork } from 'redux-saga/effects';
import fetchData from './fetchData';
import watchSearch from './search';

function* saga(){
    yield fork(fetchData);
    yield fork(watchSearch);
};

export default saga;