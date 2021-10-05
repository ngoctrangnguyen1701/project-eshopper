const detailBottom = {
    color: "#FE980F", marginRight: "5px"
}

function DetailsBottom(props) {
    const { onGetProductsByCategory, sameCategory, error, showLoading } = props;
    const { description, category } = props.details;

    return (
        <div className="category-tab shop-details-tab">
            <div className="col-sm-12">
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#details" data-toggle="tab">Details</a></li>
                    <li onClick={()=>onGetProductsByCategory(category)}>
                        <a href="#tag" data-toggle="tab">Tag</a>
                    </li>
                    <li><a href="#reviews" data-toggle="tab">Reviews (5)</a></li>
                </ul>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade active in" id="details">                    
                    <p style={{padding: "0 15px"}}>{description}</p>                    
                </div>

                <div className="tab-pane fade" id="tag">
                    {showLoading}
                    {!showLoading && error}
                    {/* khi không có showLoading thì mới hiện error,
                    để tránh trường hợp fetch bị lỗi và click lại lần nữa vào nút TAG,
                    showLoading hiện ra nhưng error vẫn cứ hiển thị ở đód
                     */}
                    {(!showLoading && !error) ? sameCategory : ''}
                </div>

                <div className="tab-pane fade" id="reviews" >
                    <div className="col-sm-12">
                        <ul>
                            <li style={{marginRight: "15px"}}>
                                <i style={detailBottom} className="fa fa-user"></i>EUGEN
                            </li>
                            <li style={{marginRight: "15px"}}>
                                <i style={detailBottom} className="fa fa-clock-o"></i>12:41 PM
                            </li>
                            <li style={{marginRight: "15px"}}>
                                <i style={detailBottom} className="fa fa-calendar-o"></i>31 DEC 2014
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p><b>Write Your Review</b></p>

                        <form action="#">
                            <span>
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Email Address" />
                            </span>
                            <textarea name="" ></textarea>
                            <b>Rating: </b> <img src="images/product-details/rating.png" alt="" />
                            <button type="button" className="btn btn-default pull-right">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsBottom;