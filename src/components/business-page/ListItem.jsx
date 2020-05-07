import React from 'react';

function ListItem(props) {
    
    return (
        <li className="passwords__list-row">
            <div className="passwords__list-password">{props.value}</div>
            <div className="passwords__list-count">{props.count}</div>
        </li>
    )
}

export default ListItem