import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const TodoList = () => {

    const [todoTaskList, setTodoTaskList] = useState<ITodo[]>([]);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        (async ()=>{
            await fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res=>res.json())
            .then(data=>setTodoTaskList(data))
          })();
    }, [])
    

  return (
    <>
    <h1>Current tasks</h1>
    <div className="filter">
      <label><span>Filter:</span> 
        <input type="text" placeholder='find task...' onChange={(e)=>setFilter(e.target.value)} />
      </label>
    </div>
    <div className='taskList'>
      <ol>

      {
        filter ?
        (
          todoTaskList?.filter(item=>item.title.includes(filter)).filter((item, index)=>index<30  ).map((task, index) => <li><TodoItem task={task} key={index} /></li> )
          
          ) : (
            
            todoTaskList?.filter((item, index)=>index<30  ).map((task, index) => <li><TodoItem task={task} key={index} /></li> )
            
            )
            
            
          }

          </ol>
    </div>
      </>
  )
}

export default TodoList