import callApi from '../../../Api/callApi';
import { put, call, takeLatest, } from 'redux-saga/effects';
import products_By_Category from '../../Action/ProductsByCategory/actionCreators';
import types from '../../Action/ProductsByCategory/actionTypes';


function getData(categoryName){
    return callApi.getProductsByCategory(categoryName);
};

function* fetchProductsByCategory(action){
    //lấy cái action được dispatch đến store, cái categoryName nằm ở action.payload
    console.log('start fetchProductsByCategory: ', action.payload);
    yield put(products_By_Category.show_Loading(true));
    try {
        const res = yield call(getData, action.payload);        
        //console.log('fetchProductsByCategory: ', res.data);
        //yield put(products_By_Category.fetch_Data_Success(res.data));
        yield put(products_By_Category.fetch_Data_Success(action.payload, res.data));
    } catch (error) {
        console.log(error);
        yield put(products_By_Category.fetch_Data_Failed());
    };
    //sau khi gọi api, dù có thành công hay không thì cũng sẽ tắt đi cái loading
    yield put(products_By_Category.show_Loading(false));
};

function* watch_Fetch_Products_By_Category(){
    yield takeLatest(types.FETCH_PRODUCTS_BY_CATEGORY, fetchProductsByCategory);
}

export default watch_Fetch_Products_By_Category;