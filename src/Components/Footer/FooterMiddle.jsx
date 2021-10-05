import { Link } from 'react-router-dom';

function FooterMiddle(props) {
    return (
        <div className="footer-widget">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="single-widget">
                            <h2>Service</h2>
                            <ul className="nav nav-pills nav-stacked">
                                <li><Link to="/">Online Help</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Order Status</Link></li>
                                <li><Link to="/">Change Location</Link></li>
                                <li><Link to="/">FAQ’s</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="single-widget">
                            <h2>Quock Shop</h2>
                            <ul className="nav nav-pills nav-stacked">
                                <li><Link to="/">T-Shirt</Link></li>
                                <li><Link to="/">Mens</Link></li>
                                <li><Link to="/">Womens</Link></li>
                                <li><Link to="/">Gift Cards</Link></li>
                                <li><Link to="/">Shoes</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="single-widget">
                            <h2>Policies</h2>
                            <ul className="nav nav-pills nav-stacked">
                                <li><Link to="/">Terms of Use</Link></li>
                                <li><Link to="/">Privecy Policy</Link></li>
                                <li><Link to="/">Refund Policy</Link></li>
                                <li><Link to="/">Billing System</Link></li>
                                <li><Link to="/">Ticket System</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="single-widget">
                            <h2>About Shopper</h2>
                            <ul className="nav nav-pills nav-stacked">
                                <li><Link to="/">Company Information</Link></li>
                                <li><Link to="/">Careers</Link></li>
                                <li><Link to="/">Store Location</Link></li>
                                <li><Link to="/">Affillate Program</Link></li>
                                <li><Link to="/">Copyright</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="single-widget">
                            <h2>About Shopper</h2>
                            <form action="#" className="searchform">
                                <input type="text" placeholder="Your email address" />
                                <button type="submit" className="btn btn-default" style={{color: "white"}}>Send</button>
                                <p>Get the most recent updates from <br />our site and be updated your self...</p>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FooterMiddle;