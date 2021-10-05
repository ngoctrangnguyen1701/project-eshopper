import { combineReducers } from 'redux';
import product from './Product/reducer';
import category from './Category/reducer';
import productDetails from './ProductDetails/reducer';
import productsByCategory from './ProductsByCategory/reducer';
import cart from './Cart/reducer';
import auth from './Auth/reducer';
import wishList from './WishList/reducer';


const reducer = combineReducers({
    product,
    category,
    productDetails,
    productsByCategory,
    cart,
    auth,
    wishList,
});

export default reducer;
