import React from 'react';

function ContactForm() {
    return (

        <div className = "contact__form">
          
            <form>
                <p className ="contact__form-title">Fill out your details, and we will get back to you shortly:</p>
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="email" placeholder="email"/>
                <textarea>note</textarea>
                <input type="submit" value="Get Started" />
                <p>This information will be used by NordPass to respond to your inquiry as provided in our Privacy Policy.</p>
            </form>
            
        </div>
        
    )
}

export default ContactForm
