import fakeStoreApi from './fakeStoreApi';
import mockApi from './mockApi';

const callApi = {
    getAllCategories(){
        return fakeStoreApi.get('/products/categories')
        //phải return cái gọi fakeStoreApi nếu không sau khi thực hiện code ở đây
        //bên file gọi method không cái giá trị trả về nào nên không thể viết tiếp then, catch
        //hoặc là xài then, catch tại đây
    },
    getAllProducts(){
        return fakeStoreApi.get('/products')
    },
    getProductById(id){
        return fakeStoreApi.get(`/products/${id}`)
    },
    getProductsByCategory(categoryName){
        return fakeStoreApi.get(`/products/category/${categoryName}`)
    },
    getToken(){
        return mockApi.get('/token/1')
    },
    getCart(){
        return mockApi.get('/cart/1')
    },
    updateCart(data){
        return mockApi.put('/cart/1', data)
    },
    getWishList(){
        return mockApi.get('/wishlist/1')
    },
    updateWishList(data){
        return mockApi.put('/wishlist/1', data)
    },
};

export default callApi;