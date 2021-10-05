import types from './actionTypes';

const act = {
    sign_Up(){
        return{
            type: types.SIGN_UP,
        }
    },
    log_In(){
        return{
            type: types.LOG_IN_REQUEST,
        }
    },
    show_Message(message){
        return{
            type: types.MESSAGE_AUTH,
            payload: message
        }
    },
    show_Loading(value){
        return{
            type: types.SHOW_LOADING_LOGIN,
            payload: value
        }
    },
    log_In_Success(token){
        return{
            type: types.LOG_IN_SUCCESS,
            payload: token
        }
    },
    is_Remember_Log_In(value){
        return{
            type: types.IS_REMEMBER_LOG_IN,
            payload: value
        }
    },
    remember_Log_In_Success(){
        return{
            type: types.REMEMBER_LOG_IN_SUCCESS,
        }
    },
    log_Out(){
        return{
            type: types.LOG_OUT_SUCCESS,
        }
    },
};

export default act;