import React, { useState, useEffect } from "react"
import axios from "axios"
import ListItem from "./ListItem"
import { ReactComponent as ArrowSort } from "../../Assets/images/arrow-sort.svg"

const PasswordsList = () => {
  const [passwords, setPasswords] = useState([])
  const [sortedPasswords, setSortedPasswords] = useState([])
  const [showItems, setShowItems] = useState(10)
  const [buttonText, setButtonText] = useState()
  const [accending, setAccending] = useState(true)
  const [rotate, setRotate] = useState("passwords__arrow")

  // fetch passwords from an api
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://playground.tesonet.lt/v2/worst-psw.json"
      )
      const sortedDesc = result.data.passwords.sort((a, b) => {
        return b.count - a.count
      })

      setPasswords(sortedDesc)
      setSortedPasswords(sortedDesc)
    }
    fetchData()
  }, [])

  // change button text
  useEffect(() => {
    setButtonText(`Show all(${passwords.length})`)
  }, [passwords])

  // click button to show more/less
  const handleClick = () => {
    setShowItems(passwords.length)
    setButtonText("Show Less")
    if (buttonText === "Show Less") {
      setShowItems(10)
      setButtonText(`Show all(${passwords.length})`)
    }
  }

  // sort array by count
  const sortCount = () => {
    const sortedDesc = [...passwords].sort((a, b) => {
      return b.count - a.count
    })
    const sortedAsc = [...passwords].sort((a, b) => {
      return a.count - b.count
    })
    if (accending) {
      setPasswords(sortedAsc)
      setAccending(false)
      setRotate("passwords__arrow-rotated")
    } else {
      setPasswords(sortedDesc)
      setAccending(true)
      setRotate("passwords__arrow")
    }
  }

  const allPasswords = passwords.slice(0, showItems).map((data) => (
    <div key={data.value}>
      <hr />
      <ListItem
        id={sortedPasswords.indexOf(data) + 1}
        value={data.value}
        count={data.count}
      />
    </div>
  ))

  return (
    <div className="passwords__list">
      <div className="passwords__table-headers">
        <div className="passwords__title"> Password </div>
        <div className="passwords__count" onClick={sortCount}>
          Count
          <div className={rotate}>
            <ArrowSort />
          </div>
        </div>
      </div>
      <div>{allPasswords}</div>
      <button className="button-medium" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  )
}

export default PasswordsList
