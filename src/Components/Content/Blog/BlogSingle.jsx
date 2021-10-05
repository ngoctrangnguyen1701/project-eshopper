import { Link } from "react-router-dom";

function BlogSingle(props) {
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
                        <img src="images/blog/blog-one.jpg" alt=""/>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p> 
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <div className="pager-area">
                        <ul className="pager pull-right">
                            <li><Link to="#">Pre</Link></li>
                            <li><Link to="#">Next</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="rating-area">
                <ul className="ratings">
                    <li className="rate-this">Rate this item:</li>
                    <li>
                        <i className="fa fa-star color"></i>
                        <i className="fa fa-star color"></i>
                        <i className="fa fa-star color"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </li>
                    <li className="color">(6 votes)</li>
                </ul>
                <ul className="tag">
                    <li>TAG:</li>
                    <li><Link to="/page404" className="color" >Pink <span>/</span></Link></li>
                    <li><Link to="/page404" className="color" >T-Shirt <span>/</span></Link></li>
                    <li><Link to="/page404" className="color" >Girls</Link></li>
                </ul>
            </div>

            <div className="socials-share">
                <Link to=""><img src="images/blog/socials.png" alt=""/></Link>
            </div>

            <div className="media commnets">
                <Link to="" className="pull-left">
                    <img className="media-object" src="images/blog/man-one.jpg" alt=""/>
                </Link>
                <div className="media-body">
                    <h4 className="media-heading">Annie Davis</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="blog-socials">
                        <ul>
                            <li><Link to="/page404"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="/page404"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="/page404"><i className="fa fa-dribbble"></i></Link></li>
                            <li><Link to="/page404"><i className="fa fa-google-plus"></i></Link></li>
                        </ul>
                        <Link to="/page404" className="btn btn-primary" >Other Posts</Link>
                    </div>
                </div>
            </div>
            <div className="response-area">
                <h2>3 RESPONSES</h2>
                <ul className="media-list">
                    <li className="media">
                        <Link to="/page404" className="pull-left">
                            <img className="media-object" src="images/blog/man-two.jpg" alt=""/>
                        </Link>
                        <div className="media-body">
                            <ul className="sinlge-post-meta">
                                <li><i className="fa fa-user"></i>Janis Gallagher</li>
                                <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className="btn btn-primary" ><i className="fa fa-reply"></i>Replay</button>
                        </div>
                    </li>
                    <li className="media second-media">
                        <Link to="/page404" className="pull-left">
                            <img className="media-object" src="images/blog/man-three.jpg" alt=""/>
                        </Link>
                        <div className="media-body">
                            <ul className="sinlge-post-meta">
                                <li><i className="fa fa-user"></i>Janis Gallagher</li>
                                <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className="btn btn-primary" ><i className="fa fa-reply"></i>Replay</button>
                        </div>
                    </li>
                    <li className="media">
                        <Link to="/page404" className="pull-left">
                            <img className="media-object" src="images/blog/man-four.jpg" alt=""/>
                        </Link>
                        <div className="media-body">
                            <ul className="sinlge-post-meta">
                                <li><i className="fa fa-user"></i>Janis Gallagher</li>
                                <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button className="btn btn-primary" ><i className="fa fa-reply"></i>Replay</button>
                        </div>
                    </li>
                </ul>					
            </div>
            <div className="replay-box">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Leave a replay</h2>
                        <form>
                            <div className="blank-arrow">
                                <label>Your Name</label>
                            </div>
                            <span>*</span>
                            <input type="text" placeholder="write your name..."/>
                            <div className="blank-arrow">
                                <label>Email Address</label>
                            </div>
                            <span>*</span>
                            <input type="email" placeholder="your email address..."/>
                            <div className="blank-arrow">
                                <label>Web Site</label>
                            </div>
                            <input type="email" placeholder="current city..."/>
                        </form>
                    </div>
                    <div className="col-sm-8">
                        <div className="text-area">
                            <div className="blank-arrow">
                                <label>Your Name</label>
                            </div>
                            <span>*</span>
                            <textarea name="message" rows="11"></textarea>
                            <button className="btn btn-primary" >post comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSingle;