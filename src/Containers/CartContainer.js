import ProductsInCart from '../Components/Content/Cart/ProductsInCart';
import Bottom from '../Components/Content/Cart/Bottom';
import Total from '../Components/Content/Cart/Total';
import Options from '../Components/Content/Cart/Option';
import CartItem from '../Components/Content/Cart/CartItem';
import EmptyCart from '../Components/Content/Cart/EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import cartAction from '../Redux/Action/Cart/actionCreators';


function CartContainer(props) {
    const dispatch = useDispatch();
    const { productsInCart, quantityInCart } = useSelector(state => state.cart);
    const { token } = useSelector(state => state.auth);
    //console.log('productsInCart: ', productsInCart);

    const onChangeQuantity = (id, quantity) => {
        if(quantity >= 1 && quantity <= 15){
            //kiểm tra nếu tăng giảm số lượng sản phẩm trong giỏ hàng nhỏ hơn bằng 1 hoặc lớn hơn bằng 15
            //thì sẽ không dipatch tới reducer
            dispatch(cartAction.change_Quantity(id, quantity, token));
        }
    };

    const onDeleteAll = () => {
        if(window.confirm('Are you sure want to delete all products in cart')){
            dispatch(cartAction.delete_All(token));
        }
    };

    let elementProduct = [];
    let total = 0;
    if(quantityInCart){
        elementProduct = productsInCart.map((item, index) =>(
            <CartItem
                key={index}
                product={item.product}
                quantity={item.quantity}
                onDelete={()=>dispatch(cartAction.delete_Product(item.product.id, item.quantity, token))}
                onChangeQuantity={onChangeQuantity}
            />
        ));
        
        productsInCart.forEach(item => {
            const { price } = item.product;
            const { quantity } = item;
            total += Number((quantity * price).toFixed(1))
        });
    };

    const Cart = () => (<>
                            <ProductsInCart
                                product={elementProduct}
                                onDeleteAll={onDeleteAll}
                            />
                            <Bottom>
                                <Options />
                                <Total total={total}/>
                            </Bottom>
                        </>);

    return (
        <>
            {quantityInCart ? <Cart/> : <EmptyCart/>}
        </>
    );
}

export default CartContainer;