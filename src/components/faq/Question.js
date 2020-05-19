import React, { useState } from "react"
import { ReactComponent as Arrow } from "../../Assets/images/arrow.svg"

const Question = (props) => {
  const { question, answer } = props
  const [active, setActive] = useState(true)
  const [expand, setExpand] = useState("faq__row")

  // click question to expand/collapse
  const handleClick = (e) => {
    if (active) {
      setExpand("faq__row-expanded")
      setActive(false)
    } else {
      setExpand("faq__row")
      setActive(true)
    }
  }

  return (
    <div onClick={handleClick} className={expand}>
      <div className="faq__question">
        {question}
        <div className="faq__arrow">
          <Arrow />
        </div>
      </div>
      <div className="faq__answer">{answer}</div>
    </div>
  )
}

export default Question
