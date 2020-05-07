import React from 'react';
import { ReactComponent as Logo } from '../../Assets/images/nordpass-logo.svg'
import Navbar from './Navbar';

function Header() {
    return (

        <header className = "header">
            <div className = "header__bar container">
                <Logo />
                <Navbar />
            </div>
        </header>

    )
}

export default Header