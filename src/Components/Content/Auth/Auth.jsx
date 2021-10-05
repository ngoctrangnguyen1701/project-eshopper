import React from 'react';

function Auth(props) {
    return (
        <section id="form">
            <div className="container">
                <div style={{display: "flex", justifyContent: "center"}}>
                    {props.children}
                </div>
            </div>
        </section>
    );
}

export default Auth;