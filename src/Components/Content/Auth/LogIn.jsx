import './loading.scss';
import { Redirect } from 'react-router-dom';

function LogIn(props) {
    const {
        onLogIn, message, 
        setIsDisplaySignUp, showLoading, 
        isSignUp, token, 
        onRememberLogin,
    } = props;

    return (
        <>
            {token && <Redirect to='/' />}
            {/* nếu có token, tức là đã login thành công thì sẽ chuyển hướng về trang Home */}

            <div className="col-sm-4">
                <div className="login-form">
                    <h2 className="text-warning">Login to your account</h2>
                    <form>
                        <input type="text" value="fake_login" readOnly />
                        <input type="password" value="fake_login" readOnly />
                        <span>
                            <input 
                                type="checkbox" className="checkbox"
                                onChange={e=>onRememberLogin(e.target.checked)}
                            /> 
                            Keep me signed in
                        </span>
                        <div className="loading-button-login">
                            {showLoading && <div className="spinner-border text-secondary"></div>}
                            <button 
                                onClick={onLogIn}
                                style={{margin: "0 0 0 5px"}}
                                type="button" className="btn btn-default"
                            >Login</button>
                        </div>
                        {isSignUp === true && message && <p className="text-danger">{message}</p>}
                    </form>
                    
                    {
                        isSignUp === false && message && (
                            <div style={{marginTop: "5px"}}>
                                <span className="text-danger" style={{marginRight: "5px"}}>{message}.</span>
                                <p
                                    className="text-primary" style={{cursor: "pointer"}}
                                    onClick={()=>setIsDisplaySignUp(true)}
                                >Click to Sign up
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default LogIn;