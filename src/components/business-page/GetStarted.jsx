import React from 'react';
import heroImg from '../../Assets/images/np-hero-image.png'

function GetStarted() {
    
    return (
        <div className="getStarted">
            <div className="getStarted__heading-block">
               <h2 className="heading" >Get your passwords organized</h2>
               <button>Get started</button>
            </div>
            <div>
               <img src={heroImg} alt="hero-image"/>
            </div>
        </div>
    )
}

export default GetStarted