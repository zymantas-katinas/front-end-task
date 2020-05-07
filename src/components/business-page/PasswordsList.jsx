import React , {useState, useEffect} from 'react';
import axios from "axios";
import ListItem from './ListItem'

function PasswordsList() {
    const [passwords, setPasswords ]= useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://playground.tesonet.lt/v2/worst-psw.json',
          );
          setPasswords(result.data.passwords);
        };
        fetchData();
      }, []);

    const allPasswords = passwords.map((data) => <ListItem value = {data.value} count ={data.count} />)

    return (
        <div className ="passwords__list">
           <ol>
             {allPasswords}
           </ol>
        </div>
    )
}

export default PasswordsList