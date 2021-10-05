import React from 'react';

function Body(props) {
    return (
        <section>
                <div className="container">
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </section>
    );
}

export default Body;