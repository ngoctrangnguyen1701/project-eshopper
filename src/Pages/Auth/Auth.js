import HeaderContainer from '../../Containers/HeaderContainer';
import Footer from '../../Components/Footer/Footer';
import AuthContainer from '../../Containers/AuthContainer';

function Auth(props) {
    return (
        <div>
            <HeaderContainer />
            <AuthContainer />
            <Footer />
        </div>
    );
}

export default Auth;