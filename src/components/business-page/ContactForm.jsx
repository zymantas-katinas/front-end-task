import React, { useState, useEffect, useRef } from 'react'
import { ReactComponent as AlertIcon } from '../../Assets/images/alert.svg'

const ContactForm = () => {
  const firstNameRender = useRef(true)
  const firstEmailRender = useRef(true)

  const [disable, setDisabled] = useState(true)

  const [nameError, setNameError] = useState(null)
  const [nameInput, setNameInput] = useState('')

  const [emailError, setEmailError] = useState(null)
  const [emailInput, setEmailInput] = useState('')

  const [messageInput, setMessageInput] = useState('')
  
  useEffect(() => {
    if (firstNameRender.current) {
      firstNameRender.current = false
      return
    }
    if (nameInput === "") {
        setNameError('Name field cannot be empty')
    } else {
        setNameError(null)
    }
    setDisabled(formValidation())
  }, [nameInput])

  useEffect(() => {
    if (firstEmailRender.current) {
        firstEmailRender.current = false
        return
    }
    if (emailInput === "") {
        setEmailError('Email address cannot be empty')
    } else {
        setEmailError(null)
    }
    setDisabled(formValidation())
  }, [emailInput])

  const formValidation = () => {
    if (nameInput === "" || emailInput === "") {
      return true
    } else {
      return false
    }
  }

  const handleSave = () => {
   // submit
  }

  return (
    <form onSubmit={ handleSave } >
        <p>Fill out your details, and we will get back to you shortly:</p>
        <div>   
          <input
            type      = "text"
            name      = "nameInput"
            value     = { nameInput }
            placeholder= "Name"
            onChange  = { e => setNameInput(e.target.value) }
            style = {nameError !== null ? {border: "1px solid rgb(246, 79, 100)"} : null}
          />
          { nameError && <div className = "contact__error"><AlertIcon /><p>{nameError}</p></div> }
        </div>
   
        <div> 
          <input
              type      = "text"
              name      = "emailInput"
              placeholder= "Email"
              value     = { emailInput }
              onChange  = { e => setEmailInput(e.target.value) }
              style = {emailError !== null ? {border: "1px solid rgb(246, 79, 100)"} : null}
          />
         { emailError && <div className = "contact__error"><AlertIcon /><p>{emailError}</p></div> }
        </div>

        <textarea
          name="message"
          value={messageInput}
          onChange  = { e => setMessageInput(e.target.value) }
        ></textarea>
         
        <p>This information will be used by NordPass to respond to your inquiry as provided in our Privacy Policy.</p>
        <button className = "button-medium" type="submit" disabled={disable} >Get Started</button>

    </form>
  )
}

export default ContactForm