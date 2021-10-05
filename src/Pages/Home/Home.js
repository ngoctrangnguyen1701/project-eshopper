import HeaderContainer from "../../Containers/HeaderContainer";
import AllProductsContainer from "../../Containers/AllProductsContainer";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Slider from "../../Components/Slider/Slider";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";

function Home(props) {
    return (
        <div>
            <HeaderContainer />
            <Slider />
            <Body>
                <LeftSidebar />
                <AllProductsContainer />
            </Body>
            <Footer />
        </div>
    );
};

export default Home;