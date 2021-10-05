import {types} from './reducer';

const initialState = {};

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.FETCH_PRODUCT_DETAILS_SUCCESS:
            return action.payload;

        case types.FETCH_PRODUCT_DETAILS_FAILED:
            return initialState;
            
        default:
            return state;
    }
};