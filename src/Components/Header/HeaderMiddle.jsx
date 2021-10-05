import { Link, useRouteMatch } from 'react-router-dom';

const activeStyle = {color: '#fe980f'};

function HeaderMiddle(props) {
    const { onSetDefault, numBasket, menu } = props;

    return (
        <div className="header-middle">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="logo pull-left">
                            <Link
                                to="/"
                                onClick={onSetDefault}
                            >
                                <img src="images/home/logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="btn-group pull-right">
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                    USA
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to="#">Canada</Link></li>
                                    <li><Link to="#">UK</Link></li>
                                </ul>
                            </div>

                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                    DOLLAR
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link to="#">Canadian Dollar</Link></li>
                                    <li><Link to="#">Pound</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="shop-menu pull-right">
                            <ul className="nav navbar-nav">
                                {menu}
                                <li>
                                    <Link 
                                        to="/cart"
                                        style={useRouteMatch('/cart') && activeStyle}
                                    >
                                        <i className="fa fa-shopping-cart"></i> Cart
                                        {numBasket !== 0 && <div className="num-Basket">{numBasket}</div>}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMiddle;