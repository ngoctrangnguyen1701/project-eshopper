import types from './actionTypes';

const act = {
    fetch_Data_Success(data){
        return{
            type: types.FETCH_CATEGORY_SUCCESS,
            payload: data
        }
    },
    fetch_Data_Failed(){
        return{
            type: types.FETCH_CATEGORY_FAILED,
        }
    },
    show_Loading(value){
        return{
            type: types.SHOW_LOADING_CATEGORY,
            payload: value
        }
    },
};

export default act;