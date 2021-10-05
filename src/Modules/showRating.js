const showRating = rate =>{
    const roundHalf = (parseFloat(rate) * 2).toFixed() / 2;
    //console.log('rate: ', rate);
    //console.log('roundHalf: ', roundHalf);

    let result = [];
    for(let i = 1 ; i <= roundHalf; i++){
        result.push(<i className="fas fa-star" key={i}></i>)
    };
    //vd: roundHalf = 3.5, ↑ sẽ chạy 3 vòng lặp với i bắt đầu bằng 1
    //vì sang vòng lặp thứ 4, i = 4 và i > roundHalf (không thỏa điều kiện)
    //==> break vòng lặp
    //nếu bắt đầu với i = 0, thì sẽ bị chạy tới 4 vòng lặp,
    //do vòng lặp thứ 4, i = 3 vẫn thỏa điều kiện i <= roundHalf
    //==> không đúng với set up rating

    if(!Number.isInteger(roundHalf)){
        //kiểm tra roundHalf có phải là số nguyên hay không
        //trường hợp làm tròn thành 0.5 chỉ có 2 trường hợp số nguyên và số lẻ
        //nếu là số lẻ thì mới push 1 cái ngôi sao phân nửa
        result.push(<i className="fas fa-star-half-alt" key={result.length + 1}></i>)
    };

    const remain = 5 - result.length;
    //mảng rating sẽ có 5 vị trí ngôi sao, nên ngôi sao rỗng sẽ chạy lắp đầy các vị trí còn lại
    //nếu gán trực tiếp vào vòng lặp for (5 - result.length) thì mỗi lần chạy mảng result lại thay đổi giá trị của length
    //vòng lặp for sẽ xét lại điều kiện mới dẫn đến việc sẽ chạy ra không đủ 5 ngôi sao
    //for(let i = 0; i < (5 - result.length); i++){
    for(let i = 0; i < remain; i++){
        result.push(<i className="far fa-star" key={result.length + 1}></i>)
    };    
    //console.log('rating by stars: ', result);
    return result;
};

export default showRating;