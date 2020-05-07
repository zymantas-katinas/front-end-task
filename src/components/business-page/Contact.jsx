import React from 'react';
import ContactForm from './ContactForm';
import contactImage from '../../Assets/images/np-form-image.png'

function Contact() {

    return (
        <div className="contact">
            <h2 className="heading">Get NordPass for business</h2> 
            <div className="contact__row">
                <img src={contactImage} alt="contact-image" />
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact