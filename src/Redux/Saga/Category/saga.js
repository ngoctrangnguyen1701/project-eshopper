import callApi from '../../../Api/callApi';
import { put, call } from 'redux-saga/effects';
import categoryAction from '../../Action/Category/actionCreators';


function getData(){
    return callApi.getAllCategories();
    //do mình cần lấy data trả về từ api nên phải dùng return ở đây,
    //nếu không dùng return, callApi.getAllProducts() vẫn thực hiện request tới api
    //nhưng không lấy được giá trị trả về gán cho biến res trong function* fetchProduct
};

function* fetchCategory(){
    console.log('start fetchCategory');
    yield put(categoryAction.show_Loading(true));
    try {
        const res = yield call(getData);        
        //console.log('fetchCategory: ', res.data);
        yield put(categoryAction.fetch_Data_Success(res.data));
    } catch (error) {
        console.log(error);
        yield put(categoryAction.fetch_Data_Failed());
    };
    //sau khi gọi api, dù có thành công hay không thì cũng sẽ tắt đi cái loading
    yield put(categoryAction.show_Loading(false));
};

export default fetchCategory;