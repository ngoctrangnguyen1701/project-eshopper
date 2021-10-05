import { select, fork, } from 'redux-saga/effects';
import fetchCart from './fetchCart';
import dispatchToReducer from './dispatchToReducer';


function* initialCart(){
    const { token } = yield select(state => state.auth);
    if(token){
        yield fork(fetchCart);
    }
    else{
        const arr = JSON.parse(localStorage.getItem('cart')) || [];
        yield fork(dispatchToReducer, arr);
    }
};

export default initialCart;