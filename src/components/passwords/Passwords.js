import React from "react"
import PasswordsList from "./PasswordsList"

const Passwords = () => {
  return (
    <div className="passwords container">
      <h3 className="heading">Top leaked passwords</h3>
      <PasswordsList />
    </div>
  )
}

export default Passwords
