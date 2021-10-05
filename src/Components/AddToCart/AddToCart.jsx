import { useEffect, useState } from 'react';
import './addTocart.scss'

function AddToCart(props) {
    const [run, setRun] = useState(false);

    //↓hiệu ứng animation của add to cart sau khi xuất hiện, 3 giây sau sẽ trở về trạng thái ban đầu
    useEffect(()=>{
        if(run === true){
            const beforeAnimation = setTimeout(()=>{
                //console.log('beforeAnimation');
                setRun(false)
            }, 3000);
            return () => {clearTimeout(beforeAnimation)}
        }
    }, [run]);

    return (
        <div className="private-style-add-to-cart">
            <button
                className={run ? 'cart-button clicked' : 'cart-button'} 
                onClick={()=>setRun(true)}>
                <span className="add-to-cart">Add to cart</span>
                <span className="added">Item added</span>
                <i className="fa fa-shopping-cart"></i>
                <i className="fa fa-square"></i>
            </button>
        </div>
    );
}

export default AddToCart;