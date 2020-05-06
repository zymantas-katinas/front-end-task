import React from 'react';
import PasswordsTable from './PasswordsTable';

function Passwords() {
    return (

        <div className = "passwords">
            <h3 className="heading">passwords Header</h3>
            <div> 
                password
                <input></input>
            </div>
            <PasswordsTable />
            <button>button</button>
        </div>
        
    )
}

export default Passwords