import { Link } from 'react-router-dom';

const handleText = {
    textOverflow:"ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
};

function ProductItem(props) {
    const { product, onAddToCart, elementAddToCart, onToggleWishList, isBeLoved } = props;
    const { id, title, price, image } = product;

    const wishList = <i className="fas fa-heart text-danger"></i>
    const noWishList = <><i className="fa fa-plus-square"></i>Add to wishlist</>

    return (
        <div className="col-sm-4">
            <div className="product-image-wrapper">
                <div className="single-products">
                    <div className="productinfo text-center">
                        <img src={image} alt={title} style={{height:"250px"}}/>
                        <h2>${price}</h2>
                        <p style={handleText}>{title}</p>
                        <button
                            className="btn btn-default add-to-cart"
                            onClick={()=>onAddToCart(product, 1)}
                        >
                            <i className="fa fa-shopping-cart"></i>Add to cart
                        </button>
                    </div>
                    <div className="product-overlay">
                        <div className="overlay-content">
                            <img src={image} alt={title} style={{width:"60%"}}/>
                            <h2>${price}</h2>
                            <p>{title}</p>
                            <span onClick={()=>onAddToCart(product, 1)}>
                                {elementAddToCart}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="choose">
                    <ul className="nav nav-pills nav-justified">
                        <li>
                            <a 
                                href="/"
                                onClick={e=>{e.preventDefault(); onToggleWishList(id)}}
                            >
                                {isBeLoved(id) ? wishList : noWishList}
                            </a>
                        </li>
                        <li>
                            <Link to={`/products/${id}`}>
                                <i className="fa fa-plus-square"></i>Watch details
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;