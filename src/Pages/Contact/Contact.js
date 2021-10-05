import HeaderContainer from "../../Containers/HeaderContainer";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";
import Content from "../../Components/Content/Contact/Contact";

function Contact(props) {
    return (
        <div>
            <HeaderContainer />
            <Body>
                <Content />
            </Body>
            <Footer />
        </div>
    );
}
export default Contact;