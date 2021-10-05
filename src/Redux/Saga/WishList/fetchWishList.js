import { call, select, put } from 'redux-saga/effects';
import callApi from '../../../Api/callApi';
import wishListAction from '../../Action/WishList/actionCreators';


function* fetchWishList(){
    const { token } = yield select(state => state.auth);
    if(token){
        console.log('start fetchWishList');
        try {
            const { data } = yield call(() => callApi.getWishList());
            yield put(wishListAction.fetch_Data_Success(data.wishList));
        } catch (error) {
            console.log(error);
        }
    };
};

export default fetchWishList;