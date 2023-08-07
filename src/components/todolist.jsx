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

 const deleteTodo = (taskName) => {
      const newTask =  todoList.filter((task)=>{
            if( task  ===  taskName ){
              return false;
            }else{
              return true;
            }
          }) ;
          setTodoList(newTask);
 }
 
  return (
    <div className='todo'>
         <input onChange={handleChange} value ={newTodo}/>
        <button onClick={handleToDo}>Add Task</button>

      <div className='task'>
        {todoList.map((task,key)=>{
          return( 
            <div key={key}>
            <h1>{task}</h1>
            <button onClick={()=> deleteTodo(task)}>X</button>
           </div> 
          )
        
        })}
        
        </div>
    </div>
  )
}

export default Todolist;