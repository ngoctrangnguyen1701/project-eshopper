import { combineReducers } from 'redux';
import actionTypes from '../../Action/ProductDetails/actionTypes';
import details from './productDetails';
import error from './error';
import showLoading from './loading';

export const types = actionTypes; 
//xuất các type lấy được trong productDetailsActionTypes để các reducer con xài

const reducer = combineReducers({
    details,
    error,
    showLoading,
});

export default reducer;