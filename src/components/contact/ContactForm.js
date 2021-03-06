import React, { useState, useEffect, useRef } from "react"
import { ReactComponent as AlertIcon } from "../../Assets/images/alert.svg"

const ContactForm = () => {
  const firstNameRender = useRef(true)
  const firstEmailRender = useRef(true)
  const [disable, setDisabled] = useState(true)
  const [nameError, setNameError] = useState(null)
  const [nameInput, setNameInput] = useState("")
  const [nameValid, setNameValid] = useState(false)
  const [emailError, setEmailError] = useState(null)
  const [emailInput, setEmailInput] = useState("")
  const [emailValid, setEmailValid] = useState(false)
  const [messageInput, setMessageInput] = useState("")

  // name validation
  useEffect(() => {
    if (firstNameRender.current) {
      firstNameRender.current = false
      return
    }
    if (nameInput.length === 0) {
      setNameError("Name field cannot be empty")
      setNameValid(false)
    } else {
      setNameError(null)
      setNameValid(true)
    }
  }, [nameInput])

  // email validation
  useEffect(() => {
    if (firstEmailRender.current) {
      firstEmailRender.current = false
      return
    }
    if (emailInput.length === 0) {
      setEmailValid(false)
      setEmailError("Email address cannot be empty")
    } else if (!emailInput.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailValid(false)
      setEmailError("Email address must be valid")
    } else {
      setEmailError(null)
      setEmailValid(true)
    }
  }, [emailInput])

  // form validation
  useEffect(() => {
    const formValidation = () => {
      if (nameValid && emailValid) {
        return false
      } else {
        return true
      }
    }
    setDisabled(formValidation())
  }, [nameValid, emailValid])

  const handleSave = () => {
    // submit
  }

  return (
    <form onSubmit={handleSave}>
      <p className="contact__info-top">
        Fill out your details, and we will get back to you shortly:
      </p>

      <div className="contact__input">
        <input
          type="text"
          name="nameInput"
          value={nameInput}
          placeholder="Name"
          onChange={(e) => setNameInput(e.target.value)}
          style={
            nameError !== null
              ? { border: "1px solid rgb(246, 79, 100)" }
              : null
          }
        />
        {nameError && (
          <div className="contact__error">
            <AlertIcon />
            <p>{nameError}</p>
          </div>
        )}
      </div>

      <div className="contact__input">
        <input
          type="text"
          name="emailInput"
          placeholder="Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          style={
            emailError !== null
              ? { border: "1px solid rgb(246, 79, 100)" }
              : null
          }
        />
        {emailError && (
          <div className="contact__error">
            <AlertIcon />
            <p>{emailError}</p>
          </div>
        )}
      </div>

      <textarea
        name="message"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      ></textarea>

      <p className="contact__info-bottom">
        This information will be used by NordPass to respond to your inquiry as
        provided in our <a href="\">Privacy Policy.</a>
      </p>
      <button className="button-medium" type="submit" disabled={disable}>
        Get Started
      </button>
    </form>
  )
}

export default ContactForm
