import { Link } from 'react-router-dom';

function Options(props) {
    return (
        <div className="col-sm-6">
            <div className="chose_area">
                <ul className="user_option">
                    <li>
                        <input type="checkbox" />
                        <label>Use Coupon Code</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label>Use Gift Voucher</label>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <label>Estimate Shipping & Taxes</label>
                    </li>
                </ul>
                <ul className="user_info">
                    <li className="single_field">
                        <label>Country:</label>
                        <select>
                            <option>United States</option>
                            <option>Bangladesh</option>
                            <option>UK</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>Ucrane</option>
                            <option>Canada</option>
                            <option>Dubai</option>
                        </select>

                    </li>
                    <li className="single_field">
                        <label>Region / State:</label>
                        <select>
                            <option>Select</option>
                            <option>Dhaka</option>
                            <option>London</option>
                            <option>Dillih</option>
                            <option>Lahore</option>
                            <option>Alaska</option>
                            <option>Canada</option>
                            <option>Dubai</option>
                        </select>

                    </li>
                    <li className="single_field zip-field">
                        <label>Zip Code:</label>
                        <input type="text" />
                    </li>
                </ul>
                <Link to="/page404" className="btn btn-default update">Get Quotes</Link>
                <Link to="/page404" className="btn btn-default check_out">Continue</Link>
            </div>
        </div>
    );
}

export default Options;