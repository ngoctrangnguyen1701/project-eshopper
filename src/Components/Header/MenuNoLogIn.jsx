import { Link, useRouteMatch } from 'react-router-dom';

const activeStyle = {color: '#fe980f'};

function MenuNoLogIn(props) {
    return (
        <>
            <li>
                <Link 
                    to="/auth"
                    style={useRouteMatch('/auth') && activeStyle}
                ><i className="fa fa-lock"></i> Log in</Link>
            </li>
        </>      
    );
}

export default MenuNoLogIn;