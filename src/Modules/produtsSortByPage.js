const produts_Sort_By_Page = 
(arrProducts = [], products_Per_Page = 0, ComponentProductItem, page = 1, props = {}) =>{    
    //console.log('props: ', props);
    if(arrProducts && arrProducts.length > 0){
        const pagesNumber = Math.ceil(arrProducts.length / products_Per_Page);
        const start = products_Per_Page * (page - 1);
        const end = start + products_Per_Page;    
        const currentProduct = arrProducts.slice(start, end);
        const elementProduct = currentProduct.map(item =>
            (<ComponentProductItem
                        key={item.id}
                        product={item}
                        {...props}
            />)
        );
        return {
            elementProduct,
            pagesNumber
        }
    };
    return {
        elementProduct: [],
        pagesNumber: 0
    }
};

export default produts_Sort_By_Page;