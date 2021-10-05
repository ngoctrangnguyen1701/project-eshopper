import React from 'react';

function SignUp(props) {
    const { onSignUp, setIsDisplaySignUp } = props;

    return (
        <div className="col-sm-4">
            <div className="signup-form">
                <h2 className="text-warning">New User Sign up!</h2>
                <form>
                    <input type="text" value="fake_login" readOnly />
                    <input type="email" value="fake_login@gmail.com" readOnly />
                    <input type="password" value="fake_login" readOnly/>
                    <button
                        onClick={()=>{setIsDisplaySignUp(false); onSignUp()}}
                        type="button" className="btn btn-default"
                    >Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;