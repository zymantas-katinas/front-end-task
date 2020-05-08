import React from 'react';

function ListItem(props) {
    
    return (
        <div className="passwords__list-item">
            <p>{props.id}.</p>
            <div className="passwords__list-row">         
                <div className="passwords__list-password">{props.value}</div>
                <div className="passwords__list-count">{props.count}</div>
            </div>
        </div>
    )
}

export default ListItem