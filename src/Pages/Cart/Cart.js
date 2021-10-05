import HeaderContainer from "../../Containers/HeaderContainer";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";
import CartContainer from "../../Containers/CartContainer";

function Cart(props) {
    return (
        <div>
            <HeaderContainer />
            <Body>
                <CartContainer />          
            </Body>
            <Footer />
        </div>
    );
};

export default Cart;