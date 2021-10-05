import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../Components/Content/ProductItem';
import AllProducts from '../Components/Content/AllProducts';
import productAction from '../Redux/Action/Product/actionCreators';
import Loader from '../Components/Loader/Loader';
import MessageError from '../Components/MessageError/MessageError';
import produts_Sort_By_Page from '../Modules/produtsSortByPage';
import cartAction from '../Redux/Action/Cart/actionCreators';
import AddToCart from '../Components/AddToCart/AddToCart';
import sortByPrice from '../Modules/sortByPrice';
import filterPrice from '../Modules/filterPrice';
import wishListAction from '../Redux/Action/WishList/actionCreators';


function AllProductsContainer(props) {
    const dispatch = useDispatch();
    const {
        allProducts,
        error,
        showLoading,
        page,
        sort,
        search,
        filter,
    } = useSelector(state => state.product);
    const { token } = useSelector(state => state.auth);
    const { wishList } = useSelector(state => state);
    const elementAddToCart = <AddToCart/>;


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


    //---------------------SEARCH---------------------
    let arrSearch = [];
    if(search){
        arrSearch = allProducts.filter(
            item => item.title.toLowerCase().includes(search.toLowerCase()));
    };


    //---------------------FILTER PRICE---------------------
    const arr = search ? arrSearch : allProducts;
    const onFilterPrice = rangePrice =>{
        dispatch(productAction.filter_price(rangePrice));
    };
    const arrFilter = filterPrice(arr, filter);


    //---------------------SORT---------------------
    const onSort = sortType =>{
        dispatch(productAction.sort(sortType));
    };
    const arrProducts = sortByPrice(arrFilter, sort);
    //console.log('arrProducts: ', arrProducts);


    //---------------------PHÂN TRANG---------------------
    const argument = [
        arrProducts,
        9,
        ProductItem,
        page,
        {onAddToCart, elementAddToCart , onToggleWishList, isBeLoved}
    ];
    const { elementProduct, pagesNumber } = produts_Sort_By_Page(...argument);

    const onSetPage = page => {
        dispatch(productAction.set_Page(parseInt(page)));
        //khi nhận được cái giá trị page từ thẻ html, page sẽ bị typeof string
        //để khi tính toán trang page không bị lỗi page nhận được phải luôn là typeof number 
    };


    return (
        <AllProducts
            products={elementProduct}
            error={error && <MessageError error={error}/>}
            showLoading={showLoading && <Loader/>}
            //↑khi showLoading là true thì sẽ render ra component <Loader/>
            page={page}
            pagesNumber={pagesNumber}
            onSetPage={onSetPage}
            onSort={onSort}
            sorting={sort}
            no_result_for_searching={(search && arrSearch.length === 0) ? 'No result for searching' : ''}
            search={search}
            onRemoveSearch={()=>dispatch(productAction.remove_Search())}
            filter={filter}
            onFilterPrice={onFilterPrice}
        />
    );
}

export default AllProductsContainer;