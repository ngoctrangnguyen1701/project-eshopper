export default function sumQuantity(arr_contain_quantity = []){
    let sum = 0;
    if(arr_contain_quantity.length > 0){
        arr_contain_quantity.forEach(item => {
            sum += item.quantity;
        });    
    };
    return sum;
};