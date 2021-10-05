function ProductsInCart(props) {
    const { product, onDeleteAll } = props;
    return (
        <section id="cart_items">
            <div className="container">
                <h2 className="text-center text-warning">Your cart</h2>
                <div className="text-right" style={{margin: "15px 0"}}>
                    <button 
                        className="btn btn-secondary"
                        onClick={onDeleteAll}
                    >Delete all products in cart</button>
                </div>
                <div className="table-responsive cart_info">
                    <table className="table table-condensed">
                        <thead>
                            <tr className="cart_menu">
                                <td className="image">Item</td>
                                <td className="description"></td>
                                <td className="price">Price</td>
                                <td className="quantity">Quantity</td>
                                <td className="total">Total</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {product}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default ProductsInCart;