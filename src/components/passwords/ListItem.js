import React from "react"

const ListItem = (props) => {
  const { id, value, count } = props

  return (
    <div className="passwords__list-item">
      <p>{id}.</p>
      <div className="passwords__list-row">
        <div className="passwords__list-password">{value}</div>
        <div className="passwords__list-count">{count}</div>
      </div>
    </div>
  )
}

export default ListItem
