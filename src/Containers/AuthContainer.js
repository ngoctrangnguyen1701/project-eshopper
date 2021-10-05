import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../Components/Content/Auth/Auth';
import LogIn from '../Components/Content/Auth/LogIn';
import SignUp from '../Components/Content/Auth/SignUp';
import authAction from '../Redux/Action/Auth/actionCreators';


function AuthContainer(props) {
    const { isSignUp, message, showLoading, token, /* isRemember */ } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [isDisplaySignUp, setIsDisplaySignUp] = useState(false);
    
    const onRememberLogin = value =>{
        dispatch(authAction.is_Remember_Log_In(value))
    }    

    return (
        <Auth>
            {
                isDisplaySignUp ? (
                    <SignUp
                        onSignUp={()=>dispatch(authAction.sign_Up())}
                        setIsDisplaySignUp={setIsDisplaySignUp}
                    />
                ) : (
                    <LogIn
                        onLogIn={()=>dispatch(authAction.log_In())}
                        message={message}
                        setIsDisplaySignUp={setIsDisplaySignUp}
                        showLoading={showLoading}
                        isSignUp={isSignUp}
                        token={token}
                        onRememberLogin={onRememberLogin}
                        /* isRemember={isRemember} */
                    />
                )
            }
        </Auth>
    );
}
export default AuthContainer;