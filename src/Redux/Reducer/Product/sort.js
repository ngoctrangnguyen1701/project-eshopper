import {types} from './reducer';

const initialState = 'default';

export default function reducer(state = initialState, action){
    switch(action.type){        
        case types.SORT_PRODUCT:
            return action.payload;
  
        default:
            return state;
    }
};