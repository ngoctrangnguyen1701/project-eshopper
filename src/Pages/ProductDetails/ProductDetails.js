import HeaderContainer from "../../Containers/HeaderContainer";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Slider from "../../Components/Slider/Slider";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";
import ProductDetailsContainer from "../../Containers/ProductDetailsContainer";

function ProductDetails(props) {
    return (
        <div>
            <HeaderContainer />
            <Slider />
            <Body>
                <LeftSidebar />
                <ProductDetailsContainer />
            </Body>
            <Footer />
        </div>
    );
};

export default ProductDetails;