import {types} from './reducer';

const initialState = 1;

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.PAGE_PRODUCT:
            return action.payload;

        case types.FILTER_PRICE_PRODUCT:
        case types.SORT_PRODUCT:
        case types.REMOVE_SEARCH_PRODUCT:
            return initialState;
            //khi có sort hoặc filter thì page sẽ trả về từ trang 1
        
        default:
            return state;
    }
};