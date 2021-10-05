import Header from '../Components/Header/Header';
import HeaderBottom from '../Components/Header/HeaderBottom';
import HeaderMiddle from '../Components/Header/HeaderMiddle';
import HeaderTop from '../Components/Header/HeaderTop';
import productAction from '../Redux/Action/Product/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import MenuNoLogIn from '../Components/Header/MenuNoLogIn';
import MenuLogedIn from '../Components/Header/MenuLogedIn';
import authAction from '../Redux/Action/Auth/actionCreators';



function HeaderContainer(props) {
    const dispatch = useDispatch();
    const { quantityInCart } = useSelector(state => state.cart);
    const { token } = useSelector(state => state.auth);
    const [keyword, setKeyword] = useState('');

    const onSearch = keyword => {
        setKeyword('');
        dispatch(productAction.set_Page(1));
        dispatch(productAction.filter_price('all'));
        dispatch(productAction.search_Request(keyword));
    };

    const onLogOut = () =>{
        dispatch(authAction.log_Out());
    };

    const onSetDefault = () => {
        dispatch(productAction.set_Page(1));
        dispatch(productAction.filter_price('all'));
    };

    return (
        <Header>
            <HeaderTop />
            <HeaderMiddle
                numBasket={quantityInCart}
                onSetDefault={onSetDefault}
                //thì sẽ trả lại cho thuộc tính page = 1 nằm trong reducer của product
                //để khi click lại vào trang Home, các sản phẩm sẽ hiển thị bắt đầu từ trang 1
                //và filter giá tiền cũng bắt đầu từ 'all'
                menu={token ? <MenuLogedIn onLogOut={onLogOut} /> : <MenuNoLogIn />}
            />
            <HeaderBottom
                onSetDefault={onSetDefault}
                onSearch={onSearch}
                keyword={keyword}
                setKeyword={setKeyword}
            />
        </Header>
    );
}

export default HeaderContainer;