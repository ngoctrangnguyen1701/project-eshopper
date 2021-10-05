import {types} from './reducer';

let initialState = 0;

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case types.QUANTITY_IN_CART:
            return action.payload;

        default:
            return state;
    }
}

export default reducer;