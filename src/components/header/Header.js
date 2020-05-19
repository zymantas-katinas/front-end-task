import React, { useEffect, useState } from "react"
import { ReactComponent as Logo } from "../../Assets/images/nordpass-logo.svg"
import Navbar from "./Navbar"

const Header = () => {
  const [headerClass, setHeaderClass] = useState("header")
  const [burgerClass, setBurgerClass] = useState("header__burger")
  const [navbarClass, setNavbarClass] = useState("header__bar-collapsed")

  const [ifScrolling, setIfScrolling] = useState(false)
  const [mobileDisplay, setMobileDisplay] = useState(false)
  const [navbarExpanded, setNavbarExpanded] = useState(false)

  // set mobile display and ifscrolling
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1000) {
        setMobileDisplay(false)
      } else {
        setMobileDisplay(true)
      }
    }
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIfScrolling(true)
      } else {
        setIfScrolling(false)
      }
    }
    window.addEventListener("scroll", onScroll)
    window.addEventListener("resize", onResize)
    onScroll()
    onResize()
  }, [])

  // set background when scrolling
  useEffect(() => {
    if (ifScrolling) {
      setHeaderClass("header-scrolling")
    } else if (mobileDisplay && navbarExpanded) {
      setHeaderClass("header-scrolling")
    } else {
      setHeaderClass("header")
    }
  }, [mobileDisplay, ifScrolling, burgerClass])

  // click burger to expand
  const handleClick = () => {
    if (mobileDisplay) {
      if (navbarExpanded) {
        setBurgerClass("header__burger")
        setNavbarClass("header__bar-collapsed")
        setNavbarExpanded(false)
      } else {
        setBurgerClass("header__burger-active")
        setNavbarClass("header__bar-expanded")
        setNavbarExpanded(true)
      }
    }
  }

  return (
    <header className={headerClass}>
      <div className="header__bar container">
        <div onClick={handleClick} className="header__logo">
          <Logo />
          <div className={burgerClass}>
            <div></div>
          </div>
        </div>
        <div className={navbarClass}>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
