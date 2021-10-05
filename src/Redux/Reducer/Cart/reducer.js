import { combineReducers } from 'redux';
import actiontypes from '../../Action/Cart/actionTypes';
import productsInCart from './cart';
import quantityInCart from './quantity';

export const types = actiontypes;
//xuất các type lấy được trong categoryActionTypes để các reducer con xài

const reducer = combineReducers({
    productsInCart,
    quantityInCart,
});

export default reducer;