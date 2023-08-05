import React,{useState} from 'react'

const Todolist = () => {

  const[todoList, setTodoList] = useState([]);
  const[newTodo, setNewTodo]= useState("");

  const handleChange = (e) =>{
    setNewTodo( e.target.value)
    console.log(e)
  }

  return (
    <div className='todo'>
         <input onChange={handleChange} value ={newTodo}/>
        <button>Add Task</button>
      <div className='tasks'></div>
    </div>
  )
}

export default Todolist;