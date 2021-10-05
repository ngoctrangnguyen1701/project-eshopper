import {types} from './reducer';

const initialState = false;

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.SHOW_LOADING_PRODUCT_DETAILS:
            return action.payload;

        default:
            return state;
    }
}