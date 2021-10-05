import {types} from './reducer';

const initialState = null;

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case types.MESSAGE_AUTH:
            return action.payload;

        default:
            return state;
    }
}

export default reducer;