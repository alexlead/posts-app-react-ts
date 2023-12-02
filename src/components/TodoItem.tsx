import React from 'react'
import { ITodo } from './TodoList'

interface ITodoItem {
  task: ITodo
}

const TodoItem = ({task}:ITodoItem) => {
  return (
    <div className='taskItem'>
        <span className={ task.completed?"complete":"" }>{task.title}</span>
    </div>
  )
}

export default TodoItem