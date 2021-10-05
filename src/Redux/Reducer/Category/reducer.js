import { combineReducers } from 'redux';
import actiontypes from '../../Action/Category/actionTypes';
import allCategories from './category';
import error from './error';
import showLoading from './loading';

export const types = actiontypes; 
//xuất các type lấy được trong categoryActionTypes để các reducer con xài

const reducer = combineReducers({
    allCategories,
    error,
    showLoading,
});

export default reducer;