import {types} from './reducer';

const initialState = null;

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.FETCH_PRODUCT_DETAILS_SUCCESS:
            return initialState;

        case types.FETCH_PRODUCT_DETAILS_FAILED:
            return 'Can not download data';
            
        default:
            return state;
    }
};