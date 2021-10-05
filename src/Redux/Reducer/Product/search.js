import {types} from './reducer';

const initialState = null;

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.SEARCH_PRODUCT:
            return action.payload;

        case types.REMOVE_SEARCH_PRODUCT:
            return initialState;

        default:
            return state;
    }
};