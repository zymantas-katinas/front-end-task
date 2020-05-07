import React, { useState, useEffect, useRef } from 'react'

const ContactForm= () => {
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
      
        <input
            type      = "text"
            name      = "nameInput"
            value     = { nameInput }
            placeholder= "Name"
            onChange  = { e => setNameInput(e.target.value) }
        />
        { nameError && <p>{nameError}</p> }

        <input
            type      = "text"
            name      = "emailInput"
            placeholder= "Email"
            value     = { emailInput }
            onChange  = { e => setEmailInput(e.target.value) }
        />
        { emailError && <p>{emailError}</p> }

        <textarea
          name="message"
          value={messageInput}
          onChange  = { e => setMessageInput(e.target.value) }
        ></textarea>
         
        <p>This information will be used by NordPass to respond to your inquiry as provided in our Privacy Policy.</p>
        <button type="submit" disabled={disable} >Get Started</button>

    </form>
  )
}

export default ContactForm