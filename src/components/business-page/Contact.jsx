import React from 'react';
import ContactForm from './ContactForm';
import contactImage from '../../Assets/images/np-form-image.png'

function Contact() {

    return (
        <div className="contact">
            <div className="contact__content container">
                <h2 className="heading">Get NordPass for business</h2> 
                <p className = "contact__info-top-over">Fill out your details, and we will get back to you shortly:</p>
                <div className="contact__row">
                    <div className= "contact__image">
                         <img src={contactImage} alt="contact-image" />
                    </div>
                    <div className= "contact__form">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact