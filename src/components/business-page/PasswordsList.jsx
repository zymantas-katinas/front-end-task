import React , {useState, useEffect} from 'react';
import axios from "axios";
import ListItem from './ListItem'

function PasswordsList() {
    const [passwords, setPasswords]= useState([]);
    const [showItems , setShowItems] = useState(10);
    const [buttonText, setButtonText] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://playground.tesonet.lt/v2/worst-psw.json',
          );
          setPasswords(result.data.passwords);      
        };
        fetchData();
      }, []);

      useEffect(() => {
        setButtonText(`Show all(${passwords.length})`);
      }, [passwords])

    const allPasswords = passwords.slice(0, showItems).map((data) => <ListItem key = {data.value} value = {data.value} count ={data.count} />)
    
    const handleClick = () => {
      setShowItems(passwords.length)
      setButtonText('Show Less');
      if(buttonText === 'Show Less' ) {
        setShowItems(10)
        setButtonText(`Show all(${passwords.length})`);
      }
    }

    return (
        <div className ="passwords__list">
           <ol>
             {allPasswords}
           </ol>
           <button onClick = {handleClick}>{buttonText}</button>
        </div>
    )
}

export default PasswordsList