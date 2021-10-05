import {types} from './reducer';

const initialState = null;

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
            return initialState;

        case types.FETCH_PRODUCTS_BY_CATEGORY_FAILED:
            return 'Can not download data';
            
        default:
            return state;
    }
};