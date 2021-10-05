import {types} from './reducer';

const initialState = 'all';

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.FILTER_PRICE_PRODUCTS_BY_CATEGORY:
            return action.payload;

        default:
            return state;
    }
};