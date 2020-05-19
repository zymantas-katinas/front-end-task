import React from "react"

const Menu = () => {
  const navItems = ["Features", "Pricing", "Apps", "Blog", "Help", "My Account"]
  const navMenu = navItems.map((item) => (
    <li key={item}>
      <a href="/">{item}</a>
    </li>
  ))

  return (
    <nav className="header__nav">
      <ul>
        {navMenu}
        <li>
          <button className="button-small">Open Vault</button>
        </li>
      </ul>
    </nav>
  )
}
export default Menu
