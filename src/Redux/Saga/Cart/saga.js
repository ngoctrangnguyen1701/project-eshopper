import { all } from 'redux-saga/effects';
import initialCart from './initialCart';
import watchCart from './watchCart';

function* cartSaga(){
    yield all([
        initialCart(),
        watchCart(),
    ])
};

export default cartSaga;