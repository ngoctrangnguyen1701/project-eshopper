import { Link } from 'react-router-dom';

function Total(props) {
    const { total } = props;

    return (
        <div className="col-sm-6">
            <div className="total_area">
                <ul>
                    <li>Cart Sub Total <span>$ {total}</span></li>
                    <li>Eco Tax <span>2%</span></li>
                    <li>Shipping Cost <span>Free</span></li>
                    <li style={{color: "#FE980F", fontWeight: "bold"}}>Total <span>$ {(total + total*0.02).toFixed(1)}</span></li>
                </ul>
                <Link to="/page404" className="btn btn-default check_out">Check Out</Link>
            </div>
        </div>
    );
}

export default Total;