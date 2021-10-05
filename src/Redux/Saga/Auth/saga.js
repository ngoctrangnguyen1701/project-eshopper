import { select, take, put, call, takeLeading } from 'redux-saga/effects';
import types from '../../Action/Auth/actionTypes';
import authAction from '../../Action/Auth/actionCreators';
import callApi from '../../../Api/callApi';


function* fetchLogin(){
    //↓ trước khi fetch kiểm tra xem có sign up chưa
    const { isSignUp } = yield select(state => state.auth);
    console.log('saga isSignUp: ', isSignUp);
    if(!isSignUp){
        //nếu chưa có sign up
        yield put(authAction.show_Message('Account does not exist. Please sign up first'));
        yield take(types.SIGN_UP);
        yield put(authAction.show_Message(null));

        //đứng đợi log in request lần nữa, nếu không sau khi bấm sign up nó sẽ chạy tiếp code phía dưới
        //và fetch thẳng tới api mà không đợi nhấn log in
        yield take(types.LOG_IN_REQUEST);
    } 
    
    //nếu isSignUp === true, thì sẽ bỏ qua đoạn code trong if mà chạy thẳng xuống đây
    console.log('start fetchLogin');
    yield put(authAction.show_Loading(true));

    try {
        const res = yield call(() => callApi.getToken());
        //console.log('saga token', res);
        yield put(authAction.log_In_Success(res.data.token));

        //↓ nếu có tích ghi nhớ đăng nhập thì sẽ lưu cái token vào localStoreage
        const { isRemember } = yield select(state => state.auth);
        if(isRemember){
            yield put(authAction.remember_Log_In_Success());
        };

    } catch (error) {
        console.log(error);
        yield put(authAction.show_Message('Can not log in'));
    };

    //↓ sau khi đã gọi tới api dù lấy được data hay không cũng đóng cái loading
    yield put(authAction.show_Loading(false));
    console.log('end fetchLogin');
};

function* watchLogIn(){
    yield takeLeading(types.LOG_IN_REQUEST, fetchLogin)
};

export default watchLogIn;