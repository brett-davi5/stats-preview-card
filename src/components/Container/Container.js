import React from 'react';
import './Container.css';

const Container = () => {
    return (
        <div className="container">

            <div className="contentBox">
                <div className="innerBox">
                    
                    <div className="textContainer">
                        <div className="mainText">
                            <h3>
                                Get insights that help your business grow.
                            </h3>
                        </div>
                        <div className="subText">
                            <p>
                                Discover the benefits of data analytics and make
                                better decisions regarding revenue, customer
                                experience, and overall efficiency.
                            </p>
                        </div>

                        <div className="littleBoxesContainer">
                            <div className="littleBox">
                                <h3>10k+</h3>
                                <p>COMPANIES</p>
                            </div>
                            <div className="littleBox">
                                <h3>314</h3>
                                <p>TEMPLATES</p>
                            </div>
                            <div className="littleBox">
                                <h3>12M+</h3>
                                <p>QUERIES</p>
                            </div>
                        </div>

                    </div>


                </div>

                <div className="innerBox">
                    hello from box 2
                </div>
            </div>

        </div>

    )
}

export default Container;