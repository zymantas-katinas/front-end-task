import React from 'react';
import heroImg from '../../Assets/images/np-hero-image.png'

function GetStarted() {
    
    return (
        <div>
            <div className="getStarted__background">
                <div className="getStarted__background-teal"></div>
                <div className="getStarted__background-gradient"></div>
            </div>
            <div className = "container">
                <div className="getStarted" >
                    <div className="getStarted__heading-block">
                    <h2 className="heading">Get your passwords organized</h2>
                    <button className ="button-large">Get started</button>
                    </div>
                    <div className = "getStarted__image">
                        <img src={heroImg} alt="hero"/>
                    </div>
                </div>      
            </div>
        </div>
    )
}

export default GetStarted