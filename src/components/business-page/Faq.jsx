import React, {useState} from 'react';
import Question from './Question'

function Faq() {

    const questions = useState([   
        {
            question: "Why should you use a password manager for business?",
            answer: <p>Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.<br />With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!</p>
        },
        {
            question: "How to choose the best password manager for business?",
            answer: <p>Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.<br />With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!</p>
        },
        {
            question: "How can I get a business password manager?",
            answer: <p>Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.<br />With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!</p>
        } 
    ])

    const allQuestions = questions[0].map(item => <Question key = {item.question} question = {item.question} answer = {item.answer} /> )
    
    return (
        <div className = "faq">
            <div className = "faq__content container">
                <h3 className="heading">Frequently asked questions</h3>
                {allQuestions}
            </div>
        </div>  
    )
}

export default Faq