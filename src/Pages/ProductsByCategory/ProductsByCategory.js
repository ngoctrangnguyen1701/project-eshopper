import HeaderContainer from "../../Containers/HeaderContainer";
import ProductsByCategoryContainer from "../../Containers/ProductsByCategoryContainer";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Slider from "../../Components/Slider/Slider";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";

function ProductsByCategory(props) {
    return (
        <div>
            <HeaderContainer />
            <Slider />
            <Body>
                <LeftSidebar />
                <ProductsByCategoryContainer />
            </Body>
            <Footer />
        </div>
    );
};

export default ProductsByCategory;