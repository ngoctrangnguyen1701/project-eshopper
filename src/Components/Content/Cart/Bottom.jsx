import React from 'react';

function Bottom(props) {
    return (
        <section id="do_action">
            <div className="container">
                <div className="heading">
                    <h3>What would you like to do next?</h3>
                    <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                </div>
                <div className="row">
                    {props.children}
                </div>
            </div>
        </section>
    );
}

export default Bottom;