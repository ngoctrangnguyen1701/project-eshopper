import { call, select, takeEvery } from 'redux-saga/effects';
import callApi from '../../../Api/callApi';
import authTypes from '../../Action/Auth/actionTypes';
import types from '../../Action/WishList/actionTypes';
import fetchWishList from './fetchWishList';

function* updateWishList(){
    const { token } = yield select(state => state.auth);
    if(token){
        try {
            const { wishList } = yield select(state => state);
            const obj = {
                wishList,
                token
            };

            const { data } = yield call(() => callApi.updateWishList(obj));
            console.log('saga updateWishList: ', data);
        } catch (error) {
            console.log(error);
        }
    }
};

function* watchWishList(){
    yield takeEvery(authTypes.LOG_IN_SUCCESS, fetchWishList);
    yield takeEvery(types.TOGGLE_WISH_LIST, updateWishList);
};

export default watchWishList;