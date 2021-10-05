import { put } from 'redux-saga/effects';
import cartAction from '../../Action/Cart/actionCreators';
import sumQuantity from '../../../Modules/sumQuantity';


function* dispatchToReducer(arr = []){
    //↓ tính tổng số lượng trong giỏ hàng
    const quantityInCart = sumQuantity(arr);

    yield put(cartAction.show_Cart(arr));
    yield put(cartAction.set_Quantity(quantityInCart));
};

export default dispatchToReducer;