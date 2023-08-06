import React,{useState} from 'react'

const Todolist = () => {

  const[todoList, setTodoList] = useState([]);
  const[newTodo, setNewTodo]= useState("");

  const handleChange = (e) =>{
    setNewTodo( e.target.value)
    
  }
 const handleToDo = () =>{
    const newList = [...todoList, newTodo]
    setTodoList(newList)
 }
  return (
    <div className='todo'>
         <input onChange={handleChange} value ={newTodo}/>
        <button onClick={handleToDo}>Add Task</button>
      <div className='tasks'>
        {todoList.map((mytodo,key)=>{
          return <h1>{mytodo}</h1>
        })}
        
        </div>
    </div>
  )
}

export default Todolist;