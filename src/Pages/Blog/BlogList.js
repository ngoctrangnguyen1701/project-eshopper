import HeaderContainer from "../../Containers/HeaderContainer";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Content from "../../Components/Content/Blog/BlogList";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";

function BlogList(props) {
    return (
        <div>
            <HeaderContainer />
            <Body>
                <LeftSidebar />
                <Content />
            </Body>
            <Footer />
        </div>
    );
}

export default BlogList;