import { all } from 'redux-saga/effects';
import fetchWishList from './fetchWishList';
import watchWishList from './watchWishList';

function* saga(){
    yield all([
        fetchWishList(),
        watchWishList(),
    ])
};

export default saga;