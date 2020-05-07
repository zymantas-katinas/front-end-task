import React from 'react';
import PasswordsList from './PasswordsList';

function Passwords() {
    return (

        <div className = "passwords">
            <h3 className="heading">Top leaked passwords</h3>
            <div className = "passwords__table-headers"> 
                <div className = "passwords__title">   Password </div>
                <div className = "passwords__count">   Count </div>
            
            </div>
            <PasswordsList />
            <button>Show all(x)</button>
        </div>
        
    )
}

export default Passwords