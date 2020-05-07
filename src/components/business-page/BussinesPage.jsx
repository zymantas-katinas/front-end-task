import React from 'react';
import GetStarted from './GetStarted';
import Passwords from './Passwords';
import Faq from './Faq';
import Contact from './Contact';

function BusinessPage() {

    return (
        <div className= "container">
            <GetStarted />
            <Passwords />
            <Faq />
            <Contact />
        </div>
    )
}

export default BusinessPage