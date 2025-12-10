import React from 'react'
import './style.css'
const ListItem = ({ item }) => {
  const handleCompletion = (complete) => {
    console.log('item completed', complete)
  }
  const onCheckBoxChange = (event) => {
    console.log('checkbox change', event.target.checked)
    handleCompletion(event.target.checked)
  }
  return (
    <li className="item-container">
      <input
        className="item-checkbox"
        type="checkbox"
        checked={item.completed}
        onChange={onCheckBoxChange}
      ></input>
      <p className={`item-title ${item.completed ? 'item-completed' : ''}`}>
        {item.title}
      </p>
    </li>
  )
}

export default ListItem

// `

// iasdh
