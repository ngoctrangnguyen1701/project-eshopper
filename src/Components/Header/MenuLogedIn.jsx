import { Link, useRouteMatch } from 'react-router-dom';

const activeStyle = {color: '#fe980f'};

function MenuLogedIn(props) {
    const { onLogOut } = props;

    return (
        <>
            <li>
                <Link
                    to="/account"
                    style={useRouteMatch('/account') && activeStyle}
                ><i className="fa fa-user"></i> Account</Link>
            </li>
            <li>
                <Link 
                    to="/wishlist"
                    style={useRouteMatch('/wishlist') && activeStyle}
                    ><i className="fa fa-star"></i> Wishlist</Link>
            </li>
            <li>
                <Link
                    to="/auth"
                    onClick={onLogOut}
                >
                    <i className="fas fa-lock-open"></i> Log out
                </Link>
            </li>
        </>       
    );
}

export default MenuLogedIn;