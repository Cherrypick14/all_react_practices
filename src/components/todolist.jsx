import React,{useState} from 'react'

const Todolist = () => {
  
  const[todoList, setTodoList] = useState([]);
  const[newTodo, setNewTodo]= useState("");

  return (
    <div className='todo'>
         <input />
        <button>Add Task</button>
      <div className='tasks'></div>
    </div>
  )
}

export default Todolist;