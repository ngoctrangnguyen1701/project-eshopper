import { Link } from 'react-router-dom';

function BlogList(props) {
    return (
        <div className="col-sm-9">
            <div className="blog-post-area">
                <h2 className="title text-center">Latest From our Blog</h2>
                <div className="single-blog-post">
                    <h3>Girls Pink T Shirt arrived in store</h3>
                    <div className="post-meta">
                        <ul>
                            <li><i className="fa fa-user"></i> Mac Doe</li>
                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                        </ul>
                        <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                        </span>
                    </div>
                    <Link to="">
                        <img src="images/blog/blog-one.jpg" alt="" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <Link to="/page404"  className="btn btn-primary">Read More</Link>
                </div>
                <div className="single-blog-post">
                    <h3>Girls Pink T Shirt arrived in store</h3>
                    <div className="post-meta">
                        <ul>
                            <li><i className="fa fa-user"></i> Mac Doe</li>
                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                        </ul>
                        <span>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </span>
                    </div>
                    <Link to="">
                        <img src="images/blog/blog-two.jpg" alt="" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <Link to="/page404" className="btn btn-primary">Read More</Link>
                </div>
                <div className="single-blog-post">
                    <h3>Girls Pink T Shirt arrived in store</h3>
                    <div className="post-meta">
                        <ul>
                            <li><i className="fa fa-user"></i> Mac Doe</li>
                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                        </ul>
                        <span>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </span>
                    </div>
                    <Link to="">
                        <img src="images/blog/blog-three.jpg" alt="" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <Link to="/page404" className="btn btn-primary">Read More</Link>
                </div>
                <div className="pagination-area">
                    <ul className="pagination">
                        <li><Link to="" className="active">1</Link></li>
                        <li><Link to="">2</Link></li>
                        <li><Link to="">3</Link></li>
                        <li><Link to=""><i className="fa fa-angle-double-right"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BlogList;