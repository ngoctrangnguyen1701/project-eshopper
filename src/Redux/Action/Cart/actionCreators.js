import types from './actionTypes';

const act = {
    add_To_Cart(product, quantity, token = null){
        return{
            type: types.ADD_TO_CART,
            payload: {
                product,
                quantity,
                token
            } 
        }
    },
    delete_Product(id, quantity, token = null){
        return{
            type: types.DELETE_PRODUCT_IN_CART,
            payload: {
                id,
                quantity,
                token
            } 
        }
    },
    delete_All(token = null){
        return{
            type: types.DELETE_ALL_PRODUCTS_IN_CART,
            payload: {
                token
            }
        }
    },
    change_Quantity(id, quantity, token = null){
        return{
            type: types.CHANGE_QUANTITY_IN_CART,
            payload: {
                id,
                quantity,
                token
            } 
        }
    },
    show_Cart(products_In_Cart = []){
        return{
            type: types.SHOW_CART,
            payload: products_In_Cart
        }
    },
    set_Quantity(quantity_In_Cart){
        return{
            type: types.QUANTITY_IN_CART,
            payload: quantity_In_Cart
        }
    },
};

export default act;