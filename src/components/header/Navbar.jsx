import React from 'react';

function Menu() {

    return (
        <nav className = "header__nav">
            <ul>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Apps</a></li>
                <li><a>Blog</a></li>
                <li><a>Help</a></li>
                <li><a>My Account</a></li>
                <li><button className ="button-small">Open Vault</button></li>
            </ul> 
        </nav>
    )
}

export default Menu