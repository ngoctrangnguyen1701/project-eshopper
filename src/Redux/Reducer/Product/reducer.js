import { combineReducers } from 'redux';
import actionTypes from '../../Action/Product/actionTypes';
import allProducts from './product';
import error from './error';
import showLoading from './loading';
import page from './page';
import sort from './sort';
import search from './search';
import filter from './filter';

export const types = actionTypes; 
//xuất các type lấy được trong productActionTypes để các reducer con xài

const reducer = combineReducers({
    allProducts,
    error,
    showLoading,
    page,
    sort,
    search,
    filter,
});

export default reducer;