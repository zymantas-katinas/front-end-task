import React, {useEffect, useState} from 'react';
import { ReactComponent as Logo } from '../../Assets/images/nordpass-logo.svg'
import Navbar from './Navbar';

function Header() {

    const [ifScrolling, setIfScrolling] = useState("header")
    const [burger, setBurger] = useState("header__burger")
    const [navbarExpanded, setNavbarExpanded] = useState(true)

    // hide background on scroll
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

    // show navbar on window resize
    useEffect(() => {
        const onResize = () => {
            const width = window.innerWidth;
            if(width > 1000){
                setNavbarExpanded(true)
            } else if(width == 999) {
                setNavbarExpanded(false)
            }
        }
        window.addEventListener("resize", onResize);

    }, [])

    // click burger to expand
    const handleClick = () => {
        if(navbarExpanded){
            setBurger("header__burger")
            setNavbarExpanded(false)
            const scrollPos = window.scrollY;
            if(scrollPos > 0){
                setIfScrolling("header scrolling")      
            } else {
                setIfScrolling("header") 
            }
        }
        else {
            setBurger("header__burger active")
            setNavbarExpanded(true)
            setIfScrolling("header scrolling") 
        }
    }

    return (
        <header className = {ifScrolling}>
            <div className = "header__bar container">
                <div onClick = {handleClick} className = "header__logo">
                    <Logo />
                    <div className={burger}><div></div></div>
                </div>
                {navbarExpanded  ? <Navbar /> : null}
            </div>
        </header>
    )
}

export default Header