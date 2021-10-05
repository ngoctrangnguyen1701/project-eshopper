import { Link } from 'react-router-dom';

const handleText = {
    textOverflow:"ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
};

function ProductItemSmall(props) {
    const { product, onAddToCart, elementAddToCart } = props;
    const { id, title, price, image} = product;

    return (
        <div className="col-sm-4">
            <div className="product-image-wrapper">
                <div className="single-products">
                    <div className="productinfo text-center">
                        <Link to={`/products/${id}`}>
                            <img src={image} alt={title} style={{height: "200px"}}/>
                            <h2>${price}</h2>
                            <p style={handleText}>{title}</p>
                        </Link>                        
                        <span onClick={onAddToCart}>
                            {elementAddToCart}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItemSmall;