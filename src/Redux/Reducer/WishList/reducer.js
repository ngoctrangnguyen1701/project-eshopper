import types from '../../Action/WishList/actionTypes';
import authTypes from '../../Action/Auth/actionTypes';

const initialState = [];

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.FETCH_WISH_LIST_SUCCESS:
            return action.payload.data;

        case types.TOGGLE_WISH_LIST:
            const { productId } = action.payload;
            const isBeLoved = Boolean(state.find(item => item === productId));

            if(isBeLoved){
                state = state.filter(item => item !== productId);
            }
            else{
                state.push(action.payload.productId);
            }
            return [...state];

        case authTypes.LOG_OUT_SUCCESS:
            return [];

        default:
            return state;
    }
};