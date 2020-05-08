import React from 'react';

function Menu() {
    return (

        <nav className = "header__nav">
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Apps</li>
                <li>Blog</li>
                <li>Help</li>
                <li>My Account</li>
                <button className ="button-small">Open Vault</button>
            </ul> 
        </nav>

    )
}

export default Menu