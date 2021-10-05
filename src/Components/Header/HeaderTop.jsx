import { Link } from 'react-router-dom';

function HeaderTop(props) {
    return (
        <div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="contactinfo">
                            <ul className="nav nav-pills">
                                <li><Link to="#"><i className="fa fa-phone"></i> +2 95 01 88 821</Link></li>
                                <li><Link to="#"><i className="fa fa-envelope"></i> info@domain.com</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="social-icons pull-right">
                            <ul className="nav navbar-nav">
                                <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-dribbble"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-google-plus"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;