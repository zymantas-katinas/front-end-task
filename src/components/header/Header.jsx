import React, {useEffect, useRef, useState} from 'react';
import { ReactComponent as Logo } from '../../Assets/images/nordpass-logo.svg'
import Navbar from './Navbar';

function Header() {

    const [ifScrolling, setIfScrolling] = useState("header")

    useEffect(()=> {
        const onScroll = () => {
            const scrollPos = window.scrollY;
           
            if(scrollPos > 0){
                setIfScrolling("header scrolling")      
            } else {
                setIfScrolling("header") 
            }
        }
        window.addEventListener("scroll", onScroll);
    
    }, [])

    return (
        <header className = {ifScrolling}>
            <div className = "header__bar container">
                <Logo />
                <Navbar />
            </div>
        </header>
    )
}

export default Header