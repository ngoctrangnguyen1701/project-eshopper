import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../Components/Content/ProductItem';
import AllProducts from '../Components/Content/AllProducts';
import Loader from '../Components/Loader/Loader';
import MessageError from '../Components/MessageError/MessageError';
import { useParams } from 'react-router-dom';
import products_By_Category from '../Redux/Action/ProductsByCategory/actionCreators';
import produts_Sort_By_Page from '../Modules/produtsSortByPage';
import cartAction from '../Redux/Action/Cart/actionCreators';
import AddToCart from '../Components/AddToCart/AddToCart';
import sortByPrice from '../Modules/sortByPrice';
import filterPrice from '../Modules/filterPrice';
import wishListAction from '../Redux/Action/WishList/actionCreators';
import { useEffect } from 'react';


function ProductsByCategoryContainer(props) {
    const { categoryName } = useParams();
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth);
    const { wishList } = useSelector(state => state);

    const elementAddToCart = <AddToCart/>;

    const { sameCategory, error, showLoading, page, sort, filter } = useSelector(state => state.productsByCategory);
    //console.log('sameCategory[categoryName]: ', sameCategory[categoryName]);
    const allProducts = sameCategory[categoryName];

    
    useEffect(()=>{
        if(!sameCategory.hasOwnProperty(categoryName)){
            //kiểm tra xem trong obj sameCategory đã có thuộc tính categoryName chưa
            //nếu chưa thì mới dispatch
            dispatch(products_By_Category.fetch_Data(categoryName));
        }
    }, [categoryName]);


    //---------THÊM VÀO GIỎ HÀNG---------
    const onAddToCart = (product, quantity) => {                
        dispatch(cartAction.add_To_Cart(product, quantity, token));
    };


    //---------THÊM VÀO DANH SÁCH YÊU THÍCH---------
    const onToggleWishList = productId => {
        if(token){
            dispatch(wishListAction.toggle_Wish_List(productId));
        }
        else{
            alert('Log in to add to wishlist')
        }
    };

    const isBeLoved = productId => {
        if(token && wishList.length > 0){
            return Boolean(wishList.find(item => item === productId));
        }
    };


    //---------------------FILTER PRICE---------------------
    const onFilterPrice = rangePrice =>{
        dispatch(products_By_Category.filter_price(rangePrice));
    };
    const arrFilter = filterPrice(allProducts, filter);


    //---------------------SORT---------------------
    const onSort = sortType =>{
        dispatch(products_By_Category.sort(sortType));
    };
    const arrProducts = sortByPrice(arrFilter, sort);
    console.log('arrProducts: ', arrProducts);


    //---------------------PHÂN TRANG---------------------
    const argument = [
        arrProducts,
        3,
        ProductItem,
        page,
        {onAddToCart, elementAddToCart, onToggleWishList, isBeLoved}
    ];
    const { elementProduct, pagesNumber } = produts_Sort_By_Page(...argument);

    const onSetPage = page => {
        dispatch(products_By_Category.set_Page(parseInt(page)));
        //khi nhận được cái giá trị page từ thẻ html, page sẽ bị typeof string
        //để khi tính toán trang page không bị lỗi page nhận được phải luôn là typeof number 
    };

    return (
        <AllProducts
            products={elementProduct}
            error={error && <MessageError error={error}/>}
            showLoading={showLoading && <Loader/>}
            page={page}
            pagesNumber={pagesNumber}
            onSetPage={onSetPage}
            onSort={onSort}
            sorting={sort}
            filter={filter}
            onFilterPrice={onFilterPrice}
        />
    );
}

export default ProductsByCategoryContainer;