import callApi from '../../../Api/callApi';
import { put, call } from 'redux-saga/effects';
import productAtion from '../../Action/Product/actionCreators';


function getData(){
    return callApi.getAllProducts();
    //do mình cần lấy data trả về từ api nên phải dùng return ở đây,
    //nếu không dùng return, callApi.getAllProducts() vẫn thực hiện request tới api
    //nhưng không lấy được giá trị trả về gán cho biến res trong function* fetchData
}

function* fetchData(){
    console.log('start fetchProduct');
    yield put(productAtion.show_Loading(true));
    try {
        const res = yield call(getData);        
        //console.log('fetchData: ', res.data);
        yield put(productAtion.fetch_Data_Success(res.data));
    } catch (error) {
        console.log(error);
        yield put(productAtion.fetch_Data_Failed());
    };
    //sau khi gọi api, dù có thành công hay không thì cũng sẽ tắt đi cái loading
    yield put(productAtion.show_Loading(false));
};

export default fetchData;