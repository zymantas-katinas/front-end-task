import React from 'react';
import heroImg from '../../Assets/images/np-hero-image.webp'

function GetStarted() {
    
    return (
        <div>
            <div className="getStarted container">
                <div className="getStarted__heading-block">
                <h2 className="heading">Get your passwords organized</h2>
                <button className ="button-large">Get started</button>
                </div>
                <div>
                <img src={heroImg} alt="hero-image"/>
                </div>
            </div>
            <div className="getStarted__background">
                 <div className="getStarted__background-teal"></div>
                 <div className="getStarted__background-gradient"></div>
            </div>
           
        </div>
    )
}

export default GetStarted