import React from 'react'
import List from './components/List/List'
import './style.css'
const ToDo = () => {
  console.log(1234)
  return (
    <div className="todo-container">
      <h3 className="list-title">ToDo List</h3>
      <List />
    </div>
  )
}

export default ToDo
