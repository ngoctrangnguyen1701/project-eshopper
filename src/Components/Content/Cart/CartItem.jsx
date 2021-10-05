import { Link } from 'react-router-dom';

const imageStyle = {
    maxWidth: "200px",
    maxHeight: "100px"
};

function CartItem(props) {
    const { quantity, product, onDelete, onChangeQuantity } = props;
    const { id, title, price, image } = product;
    return (
        <tr>
            <td>
                <Link to={`/products/${id}`}>
                    <img src={image} alt={title} style={imageStyle}/>
                </Link>
            </td>
            <td className="cart_description">
                <Link to={`/products/${id}`}>{title}</Link>
            </td>
            <td className="cart_price">
                <span style={{fontSize: "16px"}}>${price}</span>
            </td>
            <td className="cart_quantity">
                <div className="cart_quantity_button" style={{display: "flex"}}>
                    <span
                        className="cart_quantity_up"
                        style={{cursor: "default"}}
                        onClick={()=>onChangeQuantity(id, quantity -1)}
                    > - </span>
                    <input
                        readOnly
                        className="cart_quantity_input"
                        type="text" name="quantity"
                        value={quantity}
                    />
                    <span
                        className="cart_quantity_down"
                        style={{cursor: "default"}}
                        onClick={()=>onChangeQuantity(id, quantity + 1)}
                    > + </span>
                </div>
            </td>
            <td className="cart_total">
                <span className="cart_total_price">$ {(quantity * price).toFixed(1)}</span>
            </td>
            <td>
                <span
                    className="cart_quantity_delete"
                    onClick={onDelete}
                >
                    <i className="fa fa-times"></i>
                </span>
            </td>
        </tr>
    );
}

export default CartItem;