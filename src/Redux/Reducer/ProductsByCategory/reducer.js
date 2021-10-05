import { combineReducers } from 'redux';
import actionTypes from '../../Action/ProductsByCategory/actionTypes';
import sameCategory from './productsByCategory';
import error from './error';
import showLoading from './loading';
import page from './page';
import sort from './sort';
import filter from './filter';

export const types = actionTypes; 
//xuất các type lấy được trong productDetailsActionTypes để các reducer con xài

const reducer = combineReducers({
    sameCategory,
    error,
    showLoading,
    page,
    sort,
    filter
});

export default reducer;