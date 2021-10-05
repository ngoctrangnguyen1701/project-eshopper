import types from './actionTypes';

const act = {
    fetch_Data_Success(data){
        return{
            type: types.FETCH_WISH_LIST_SUCCESS,
            payload: {
                data
            }
        }
    },
    toggle_Wish_List(productId){
        return{
            type: types.TOGGLE_WISH_LIST,
            payload: {
                productId
            }
        }
    },
};

export default act;