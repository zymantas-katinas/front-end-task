import React from 'react';
import FooterNav from './FooterNav'

function Footer() {

    return (
        <footer className ="footer container">
            <FooterNav />
           <p className ="footer__copyright">Copyright © 2020 NordPass.com </p> 
        </footer>
    )
}

export default Footer