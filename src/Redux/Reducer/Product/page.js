import {types} from './reducer';

const initialState = 1;

export default function reducer(state = initialState, action){
    switch(action.type){
        case types.PAGE_PRODUCT:
            return action.payload;

        case types.SORT_PRODUCT:
            return initialState;
            //khi có sort thì page sẽ trả về từ trang 1

        default:
            return state;
    }
};