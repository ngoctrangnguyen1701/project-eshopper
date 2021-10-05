import HeaderContainer from "../../Containers/HeaderContainer";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";
import Content from "../../Components/Content/Blog/BlogSingle";

function BlogSingle(props) {
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

export default BlogSingle;