import { put, delay, takeLatest, } from 'redux-saga/effects';
import types from '../../Action/Product/actionTypes';
import act from '../../Action/Product/actionCreators';


function* search(action){
    yield delay(500);//đợi 0.5s mới dipatch tới reducer, tránh để dipatch liên tục
    const keyword = action.payload.trim();
    console.log('start search: ', keyword);
    yield put(act.search(keyword));
};

function* watchSearch(){
    yield takeLatest(types.SEARCH_PRODUCT_REQUEST, search);    
};

export default watchSearch;