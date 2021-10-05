import { all } from 'redux-saga/effects';
import product from './Product/saga';
import category from './Category/saga';
import productDetails from './ProductDetails/saga';
import productsByCategory from './ProductsByCategory/saga';
import auth from './Auth/saga';
import cart from './Cart/saga';
import wishList from './WishList/saga';


function* rootSaga(){
    yield all([
        product(),
        category(),
        productDetails(),
        productsByCategory(),
        auth(),
        cart(),
        wishList(),
    ])
};

export default rootSaga;