import types from './actionTypes';

const act = {
    fetch_Data_Success(data){
        return{
            type: types.FETCH_PRODUCT_SUCCESS,
            payload: data
        }
    },
    fetch_Data_Failed(){
        return{
            type: types.FETCH_PRODUCT_FAILED,
        }
    },
    show_Loading(value){
        return{
            type: types.SHOW_LOADING_PRODUCT,
            payload: value
        }
    },
    set_Page(value){
        return{
            type: types.PAGE_PRODUCT,
            payload: value
        }
    },
    sort(sortType){
        return{
            type: types.SORT_PRODUCT,
            payload: sortType
        }
    },
    search_Request(keyword){
        return{
            type: types.SEARCH_PRODUCT_REQUEST,
            payload: keyword
        }
    },
    search(keyword){
        return{
            type: types.SEARCH_PRODUCT,
            payload: keyword
        }
    },
    remove_Search(){
        return{
            type: types.REMOVE_SEARCH_PRODUCT,
        }
    },
    filter_price(rangePrice){
        return{
            type: types.FILTER_PRICE_PRODUCT,
            payload: rangePrice
        }
    },
};

export default act;