import types from './actionTypes';

const act = {
    fetch_Data(id){
        return{
            type: types.FETCH_PRODUCT_DETAILS,
            payload: id
        }
    },
    fetch_Data_Success(data){
        return{
            type: types.FETCH_PRODUCT_DETAILS_SUCCESS,
            payload: data
        }
    },
    fetch_Data_Failed(){
        return{
            type: types.FETCH_PRODUCT_DETAILS_FAILED,
        }
    },
    show_Loading(value){
        return{
            type: types.SHOW_LOADING_PRODUCT_DETAILS,
            payload: value
        }
    },
};

export default act;