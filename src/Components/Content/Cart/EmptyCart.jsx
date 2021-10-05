import { Link } from 'react-router-dom';
import './emptyCart.scss';

function EmptyCart(props) {
    return (
        <div className="container">
            <div className="empty-cart">
                <div className="empty-cart-img">
                    <img src="/images/cart/empty_cart.png" alt="" />
                </div>
                <span className="empty-cart-text" >Your cart is empty</span>
                <div className="empty-cart-link">
                    <Link to="/">Continue shopping</Link>
                </div>
            </div>
        </div>
    );
}

export default EmptyCart;