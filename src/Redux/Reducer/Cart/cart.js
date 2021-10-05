import {types} from './reducer';

const initialState = null;

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case types.ADD_TO_CART:
            const { product, quantity, token } = action.payload;
            
            const addedProduct = state.find(item => item.product.id === product.id);            
            if(addedProduct){
                addedProduct.quantity += quantity;
                //↓ giới hạn số lượng sản phẩm chỉ từ 1 đến 15
                if(addedProduct.quantity < 1){
                    addedProduct.quantity = 1;
                }
                else if(addedProduct.quantity > 15){
                    addedProduct.quantity = 15;
                }
            }
            else{
                state.push({
                    product,
                    quantity
                });
            };

            if(!token){
                //nếu không có token thì sẽ lưu vào localStorage
                localStorage.setItem('cart', JSON.stringify(state));
            };

            return [...state];

        case types.DELETE_PRODUCT_IN_CART:
            const newArr = state.filter(item => item.product.id !== action.payload.id);

            if(!action.payload.token){
                //nếu không có token thì sẽ lưu vào localStorage
                localStorage.setItem('cart', JSON.stringify(newArr));
            };
            return [...newArr];

        case types.DELETE_ALL_PRODUCTS_IN_CART:
            if(!action.payload.token){
                localStorage.removeItem('cart');
            }
            return [];

        case types.CHANGE_QUANTITY_IN_CART:
            const updateProduct = state.find(item => item.product.id === action.payload.id);
            updateProduct.quantity = action.payload.quantity;

            if(!action.payload.token){
                localStorage.setItem('cart', JSON.stringify(state));
            }
            return [...state];

        case types.SHOW_CART:
            return action.payload;

        default:
            return state;
    }
}

export default reducer;