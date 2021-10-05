import {types} from './reducer';

const initialState = 'default';

export default function reducer(state = initialState, action){
    switch(action.type){        
        case types.SORT_PRODUCTS_BY_CATEGORY:
            return action.payload;
  
        default:
            return state;
    }
};