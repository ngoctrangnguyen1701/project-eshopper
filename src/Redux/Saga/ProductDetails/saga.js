import callApi from '../../../Api/callApi';
import { put, call, takeLatest } from 'redux-saga/effects';
import productDetails from '../../Action/ProductDetails/actionCreators';
import types from '../../Action/ProductDetails/actionTypes';


function getData(id){
    return callApi.getProductById(id);
    //do mình cần lấy data trả về từ api nên phải dùng return ở đây,
    //nếu không dùng return, callApi.getProductById() vẫn thực hiện request tới api
    //nhưng không lấy được giá trị trả về gán cho biến res trong function* fetchProduct
};

function* fetchProductDetails(action){
    //lấy cái action được dispatch đến store
    console.log('start fetchProductDetails: ', action.payload);
    yield put(productDetails.show_Loading(true));
    try {
        const res = yield call(getData, action.payload);        
        //console.log('fetchProductDetails: ', res.data);
        yield put(productDetails.fetch_Data_Success(res.data));
    } catch (error) {
        console.log(error);
        yield put(productDetails.fetch_Data_Failed());
    };
    //sau khi gọi api, dù có thành công hay không thì cũng sẽ tắt đi cái loading
    yield put(productDetails.show_Loading(false));
};

function* watch_Fetch_Product_Details(){
    yield takeLatest(types.FETCH_PRODUCT_DETAILS, fetchProductDetails);
}

export default watch_Fetch_Product_Details;