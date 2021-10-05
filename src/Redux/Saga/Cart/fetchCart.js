import { call, fork } from 'redux-saga/effects';
import callApi from '../../../Api/callApi';
import dispatchToReducer from './dispatchToReducer';

function* fetchCart(){
    console.log('start fetchCart');
    try {
        const res = yield call(()=> callApi.getCart());
        const { cart } = res.data;
        yield fork(dispatchToReducer, cart);

    } catch (error) {
        console.log(error);
    }
};

export default fetchCart;