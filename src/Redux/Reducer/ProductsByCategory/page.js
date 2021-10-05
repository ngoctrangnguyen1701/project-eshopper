import {types} from './reducer';

const initialState = 1;

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.PAGE_PRODUCTS_BY_CATEGORY:
            return action.payload;

        case types.SORT_PRODUCTS_BY_CATEGORY:
        case types.FILTER_PRICE_PRODUCTS_BY_CATEGORY:
            return initialState;
            //khi có sort hoặc filter thì page sẽ trả về từ trang 1

        default:
            return state;                        
    }
};