import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import ListItem from '../ListItem/ListItem'
const List = () => {
  const [data, setData] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const fetchTodos = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    )
    const todos = await response.json()
    console.log(todos)
    return todos
  }

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      const todos = await fetchTodos()
      setData(todos)
      setIsLoading(false)
    }

    loadData()
  }, [])

  // const data = [
  //   { id: 1, task: 'Task 1' },
  //   { id: 2, task: 'Task 2' },
  //   { id: 3, task: 'Task 3' },
  // ]
  return (
    <ul>
      {isLoading ? (
        <Loader />
      ) : (
        data.map((item) => <ListItem key={item.id} item={item} />)
      )}
    </ul>
  )
}

export default List
