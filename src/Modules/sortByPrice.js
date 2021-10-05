const sortByPrice = (arrSort = [], sortType) => {
    const newArr = [...arrSort];
    //clone ra 1 mảng mới trước khi tiến hàng sắp xếp
    //để khi sortType là mặc định
    //hàm sortByPrice trả về vẫn là 1 mảng mới khác với mảng arrSort đưa vào ban đầu
    //nhưng vậy sẽ đảm bảo được sự render trong component
    if(sortType !== 'default'){
        newArr.sort((a, b) => {
            if(sortType === 'ascending'){
                return a.price - b.price;
            }
            else if(sortType === 'descending'){
                return b.price - a.price;
            }
            return newArr
        })
    }
    return newArr
};
//https://niithanoi.edu.vn/sort-trong-javascript.html
export default sortByPrice;