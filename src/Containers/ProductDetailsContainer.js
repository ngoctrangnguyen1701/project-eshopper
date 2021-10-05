import Details from '../Components/Content/ProductDetails/Details';
import DetailsTop from '../Components/Content/ProductDetails/DetailsTop';
import DetailsBottom from '../Components/Content/ProductDetails/DetailsBottom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import products_By_Category from '../Redux/Action/ProductsByCategory/actionCreators';
import productDetails from '../Redux/Action/ProductDetails/actionCreators';
import { useEffect, useState } from 'react';
import ProductItemSmall from '../Components/Content/ProductDetails/ProductItemSmall';
import Loader from '../Components/Loader/Loader';
import MessageError from '../Components/MessageError/MessageError';
import cartAction from '../Redux/Action/Cart/actionCreators';
import showRating from '../Modules/showRating';
import AddToCart from '../Components/AddToCart/AddToCart';


function ProductDetailsContainer(props) {
    const dispatch = useDispatch();
    const {id} = useParams();
    const { details, error, showLoading } = useSelector(state => state.productDetails);
    const { category } = details;
    const {
        sameCategory, 
        error: sameCategoryError, 
        showLoading: sameCategoryShowLoading
    } = useSelector(state => state.productsByCategory);
    const { token } = useSelector(state => state.auth);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(()=>{
        if(id){
            dispatch(productDetails.fetch_Data(id));
        };
    }, [id]);

    const changeQuantity = value =>{
        if(value >= 1 && value <= 15){
            setQuantity(value);
        }
    };

    //---------LOAD CÁC SẢN PHẨM CÙNG CATEGORY---------
    const onGetProductsByCategory = categoryName =>{
        if(!sameCategory.hasOwnProperty(categoryName)){
            //kiểm tra xem trong obj sameCategory đã có thuộc tính categoryName chưa
            //nếu chưa thì mới dispatch
            //tránh trường hợp đã fetch các sản phẩm cùng category trước đó rồi mà cứ bám nút TAG fetch gọi api hoài
            dispatch(products_By_Category.fetch_Data(categoryName));
        }
    };

    //---------LOẠI BỎ SẢN PHẨM ĐÃ HIỂN THỊ TRÊN DETAILS---------
    //console.log(sameCategory[category]);
    let elementSameCategory = [];
    const arrProducts = sameCategory[category];
    if(arrProducts && arrProducts.length > 0){
        const newArr = arrProducts.filter(item => item.id !== parseFloat(id));
        //vì cái biến id lấy từ useParams() có typeof string nên khi so sánh với các id nằm trong mảng sameCategory
        //đều có typeof number nên sẽ không loại sản phẩm có id hiện trên details
        //console.log('newArr: ', newArr);

        elementSameCategory = newArr.map((item, index) => 
            (<ProductItemSmall
                key={index}
                product={item}
                onAddToCart={()=>dispatch(cartAction.add_To_Cart(item, 1, token))}
                elementAddToCart={<AddToCart/>}
            />)
        );
    };

    return (
        <Details
            error={error && <MessageError error={error}/>}
            showLoading={showLoading && <Loader/>}
        >
            <DetailsTop
                details={details}
                showRating={showRating}
                onAddToCart={()=>dispatch(cartAction.add_To_Cart(details, quantity, token))}
                quantity={quantity}
                changeQuantity={changeQuantity}
                elementAddToCart={<AddToCart/>}
            />
            <DetailsBottom
                details={details}
                onGetProductsByCategory={onGetProductsByCategory}
                sameCategory={elementSameCategory}
                error={sameCategoryError && <MessageError error={sameCategoryError}/>}
                showLoading={sameCategoryShowLoading && <Loader/>}
            />
        </Details>
    );
}

export default ProductDetailsContainer;