import {types} from './reducer';


const initialState = localStorage.getItem('access_token') || null;

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case types.LOG_IN_SUCCESS:
            return action.payload;

        case types.REMEMBER_LOG_IN_SUCCESS:
            localStorage.setItem('access_token', state);
            return state;

        case types.LOG_OUT_SUCCESS:
            localStorage.removeItem('access_token');
            return null;

        default:
            return state;
    }
}

export default reducer;