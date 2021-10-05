import {types} from './reducer';


const initialState = false;

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case types.IS_REMEMBER_LOG_IN:
            return action.payload;

        default:
            return state;
    }
}

export default reducer;