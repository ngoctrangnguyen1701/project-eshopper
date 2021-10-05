import {types} from './reducer';

const isSignUp = localStorage.getItem('access_token');
const initialState = isSignUp ? true : false;

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case types.SIGN_UP:
            return true;

        default:
            return state;
    }
}

export default reducer;