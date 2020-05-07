import React from 'react';
import ListItem from './ListItem'

function PasswordsList() {
    return (

        <div className ="passwords__list">
           <ol>
               <ListItem />
               <ListItem />
               <ListItem />
               <ListItem />
           </ol>
        </div>
        
    )
}

export default PasswordsList