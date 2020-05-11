import React from 'react';

function Menu() {

    return (
        <nav className = "header__nav">
            <ul>
                <li><a href="/">Features</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Apps</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Help</a></li>
                <li><a href="/">My Account</a></li>
                <li><button className ="button-small">Open Vault</button></li>
            </ul> 
        </nav>
    )
}

export default Menu