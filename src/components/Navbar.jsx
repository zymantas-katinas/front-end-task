import React from 'react';
import Logo from './navbar/Logo';
import Menu from './navbar/Menu';

function Navbar() {
    return (
        <div className = "navbar">
            <Logo />
            <Menu />
        </div>
    )
}

export default Navbar