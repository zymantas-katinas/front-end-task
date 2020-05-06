import React from 'react';
import ContactForm from './ContactForm'

function Contact() {
    return (

        <div className="contact">
            <h2 className="heading">Contact Heading</h2> 
            <div className="contact__row">
                <div>image</div>
                <ContactForm />
            </div>
        </div>
        
    )
}

export default Contact