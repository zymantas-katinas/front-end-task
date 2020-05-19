import React, { useState, useEffect } from "react"
import Question from "./Question"
import questionsData from "./questionsData.json"

const Faq = () => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    setQuestions(questionsData)
  }, [])

  const allQuestions = questions.map((item) => (
    <Question
      key={item.question}
      question={item.question}
      answer={item.answer}
    />
  ))

  return (
    <div className="faq">
      <div className="faq__content container">
        <h3 className="heading">Frequently asked questions</h3>
        {allQuestions}
      </div>
    </div>
  )
}

export default Faq
