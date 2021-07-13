import React from 'react';
import './Container.css';
import picture from '../../resources/Images/image-header-desktop.jpg';

const Container = () => {
    return (
        <div className="container">

            <div className="contentBox">
                <div className="innerBox">
                    <div className="textContainer">
                        <div className="mainText fancyText">
                            <h3>Get <span className="insights">insights</span> that help your business grow.</h3>
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
                                <h5 className="fancyText">10k+</h5>
                                <p>COMPANIES</p>
                            </div>
                            <div className="littleBox">
                                <h5 className="fancyText">314</h5>
                                <p>TEMPLATES</p>
                            </div>
                            <div className="littleBox">
                                <h5 className="fancyText">12M+</h5>
                                <p>QUERIES</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="innerBox">
                    <img src={picture} alt="Workers at a meeting" className="workersImage"/>
                </div>
            </div>

        </div>

    )
}

export default Container;