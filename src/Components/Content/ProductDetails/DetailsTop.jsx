const ratingStyle = {
    display: "inline-block",
    marginRight: "5px"
};

const arrowStyle = {
    color: "gray",
    fontSize: "16px",
    cursor: "pointer"
};

const addStyle = {
    width: "100%",
    display: "flex",
    /* justifyContent: "center", */
    alignItems: "center"
}

function DetailsTop(props) {
    const { title, image, price, rating} = props.details;
    const { showRating, quantity, changeQuantity, onAddToCart, elementAddToCart } = props;

    return (
        <div className="product-details">
            <div className="col-sm-5">
                <div className="view-product">
                    <img src={image} alt={title} />
                    <h3>ZOOM</h3>
                </div>
            </div>
            <div className="col-sm-7">
                <div className="product-information">
                    <img src="images/product-details/new.jpg" className="newarrival" alt="" />
                    <h2>{title}</h2>
                    <p>Web ID: 1089772</p>
                    <div style={{...ratingStyle, color: "#FE980F"}}>
                        {rating && showRating(rating.rate)}
                    </div>
                    {rating && <div style={ratingStyle}>({rating.count})</div> }
                    <span>votes</span>
                    <span>
                        <span>US ${price}</span>
                        <div style={addStyle}>
                            <label style={{marginBottom: "0px"}}>Quantity:</label>
                            <i
                                className="fas fa-arrow-circle-down"
                                style={arrowStyle}
                                onClick={()=>changeQuantity(quantity - 1)}
                            ></i>
                            <input 
                                style={{display: "inline-block", margin: "0 2px"}}
                                readOnly
                                value={quantity}
                            />
                            <i
                                className="fas fa-arrow-circle-up"
                                style={arrowStyle}
                                onClick={()=>changeQuantity(quantity + 1)}
                            ></i>
                            <div
                                style={{display: "inline-block", marginBottom: "-10px", width: "50%"}}
                                onClick={onAddToCart}>
                                {elementAddToCart}
                            </div>
                        </div>
                    </span>
                    <p><b>Availability:</b> In Stock</p>
                    <p><b>Condition:</b> New</p>
                    <p><b>Brand:</b> E-SHOPPER</p>
                    <img src="images/product-details/share.png" className="share img-responsive" alt="" />
                </div>
            </div>
        </div>
    );
}

export default DetailsTop;