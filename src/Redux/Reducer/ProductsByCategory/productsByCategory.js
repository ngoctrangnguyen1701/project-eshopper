import {types} from './reducer';

/* const initialState = [];

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
            return action.payload;

        case types.FETCH_PRODUCTS_BY_CATEGORY_FAILED:
            return initialState;
            
        default:
            return state;
    }
}; */

const initialState = {};

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.FETCH_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                [action.payload] : []
            }

        case types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        case types.FETCH_PRODUCTS_BY_CATEGORY_FAILED:
            return initialState;
            
        default:
            return state;
    }
};