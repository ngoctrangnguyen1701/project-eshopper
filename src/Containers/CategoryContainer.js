import { useDispatch, useSelector } from 'react-redux';
import Category from '../Components/LeftSidebar/Category';
import CategoryItem from '../Components/LeftSidebar/CategoryItem';
import Loader from '../Components/Loader/Loader';
import MessageError from '../Components/MessageError/MessageError';
import products_By_Category from '../Redux/Action/ProductsByCategory/actionCreators';

function CategoryContainer(props) {
    const dispatch = useDispatch();
    const { allCategories, error, showLoading } = useSelector(state => state.category);

    const onSetDefault = () => {
        dispatch(products_By_Category.set_Page(1));
        dispatch(products_By_Category.filter_price('all'));
        //trả lại cho thuộc tính page = 1 nằm trong reducer của productsByCategory
        //để khi click lại vào các <CategoryItem/> bên <LeftSidebar/>),
        //các sản phẩm cùng loại sẽ hiển thị bắt đầu từ trang 1
        //và trả về cả filter pirce all
    };

    let elementCategory = [];
    if(allCategories && allCategories.length > 0){
        elementCategory = allCategories.map((item, index) => 
            (<CategoryItem 
                key={index}
                categoryName={item}
                onSetDefault={onSetDefault}
            />)
        );
    };

    return (
        <Category
            categories={elementCategory}
            error={error && <MessageError error={error}/>}
            showLoading={showLoading && <Loader/>}
        />        
    );
}

export default CategoryContainer;