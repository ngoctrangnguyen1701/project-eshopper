import { select, takeEvery, call, put } from 'redux-saga/effects';
import types from '../../Action/Cart/actionTypes';
import callApi from '../../../Api/callApi';
import cartAction from '../../Action/Cart/actionCreators';
import sumQuantity from '../../../Modules/sumQuantity';
import authTypes from '../../Action/Auth/actionTypes';
import initialCart from './initialCart';


function* updateQuantity(){
    //tính số lượng để hiện thị trên giỏ hàng
    const { productsInCart } = yield select(state => state.cart);
    const numBasket = sumQuantity(productsInCart);
    yield put(cartAction.set_Quantity(numBasket));

    //nếu có token thì đẩy lên server
    const { token } = yield select(state => state.auth);
    console.log('saga token: ', token);
    if(token){
        const obj = {
            cart: productsInCart,
            token
        };
    
        try {
            const { data } = yield call(() => callApi.updateCart(obj));
            console.log('saga cart update: ', data);
        } catch (error) {
            console.log(error);
        };
    }
};

function* watchCart(){
    yield takeEvery(types.ADD_TO_CART, updateQuantity);
    yield takeEvery(types.DELETE_PRODUCT_IN_CART, updateQuantity);
    yield takeEvery(types.DELETE_ALL_PRODUCTS_IN_CART, updateQuantity);
    yield takeEvery(types.CHANGE_QUANTITY_IN_CART, updateQuantity);

    //------------------KHI CÓ LOG IN HOẶC LOG OUT------------------
    yield takeEvery(authTypes.LOG_IN_SUCCESS, initialCart);
    yield takeEvery(authTypes.LOG_OUT_SUCCESS, initialCart);
};

export default watchCart;