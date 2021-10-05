import types from './actionTypes';

const act = {
    fetch_Data(categoryName){
        return{
            type: types.FETCH_PRODUCTS_BY_CATEGORY,
            payload: categoryName
        }
    },
    fetch_Data_Success(categoryName, data){
        return{
            type: types.FETCH_PRODUCTS_BY_CATEGORY_SUCCESS,
            payload: {
                [categoryName]: data
            }
        }
    },
    fetch_Data_Failed(){
        return{
            type: types.FETCH_PRODUCTS_BY_CATEGORY_FAILED,
        }
    },
    show_Loading(value){
        return{
            type: types.SHOW_LOADING_PRODUCTS_BY_CATEGORY,
            payload: value
        }
    },
    set_Page(value){
        return{
            type: types.PAGE_PRODUCTS_BY_CATEGORY,
            payload: value
        }
    },
    sort(sortType){
        return{
            type: types.SORT_PRODUCTS_BY_CATEGORY,
            payload: sortType
        }
    },
    filter_price(rangePrice){
        return{
            type: types.FILTER_PRICE_PRODUCTS_BY_CATEGORY,
            payload: rangePrice
        }
    }
};

export default act;