import React, {useState} from 'react';
import { ReactComponent as Arrow } from '../../Assets/images/arrow.svg'

function Question(props) {
    const [active, setActive] = useState(true);
    const [expand, setExpand] = useState("collapsed");


    const handleClick = (e) => {
       if(active){

             setExpand("expanded");
             setActive(false) ;
       } else {
            setExpand("collapsed")
            setActive(true)
       }
    }

    return (
        <div onClick = {handleClick} className = {expand}  >
            <div className="faq__question">
               {props.question}   
               <div className="faq__arrow"><Arrow /> </div>
            </div>
            <div className="faq__answer">
                {props.answer}  
            </div>
        </div> 
    )
}

export default Question