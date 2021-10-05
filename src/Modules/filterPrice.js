const filterPrice = (arr = [], priceRange = '') =>{
    const newArr = [...arr];
    switch(priceRange){
        case 'under 50':
            return newArr.filter(item => item.price < 50);

        case '50 - 100':
            return newArr.filter(item => (item.price >= 50 && item.price <= 100));

        case 'above 100':
            return newArr.filter(item => item.price > 100);

        default:
            return newArr;
    }
};

export default filterPrice;