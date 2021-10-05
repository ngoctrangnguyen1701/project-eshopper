import { combineReducers } from 'redux';
import actionTypes from '../../Action/Auth/actionTypes';
import isSignUp from './siginUp';
import message from './message';
import showLoading from './loading';
import token from './token';
import isRemember from './remember';

export const types = actionTypes;

const reducer = combineReducers({
    isSignUp,
    message,
    showLoading,
    token,
    isRemember,
})

export default reducer;