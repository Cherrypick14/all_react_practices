import React,{useState} from 'react'

const Todolist = () => {

  const[todoList, setTodoList] = useState([]);
  const[newTodo, setNewTodo]= useState("");

  const handleChange = (e) =>{
    setNewTodo( e.target.value)
    
  }

 const addTask = () =>{
   const task = {
    id : todoList.length === 0 ? 1 : todoList[todoList.length - 1 ].id + 1,
    taskName: newTodo
  };
    setTodoList([...todoList, task])
     
 };

 const handleToDo = () =>{
  const newList = [...todoList, newTodo]
  setTodoList(newList)
};

 const deleteTodo = (id) => {
      const newTask =  todoList.filter((task)=> task.id !== id    
          ) ;
          setTodoList(newTask);
 }
  
  return (
    <div className='todo'>
         <input onChange={handleChange} value ={newTodo}/>
        <button onClick={handleToDo}>Add Task</button>

      <div className='task'>
        {todoList.map((task,key)=>{
          return( 
            <div key={key.id}>
            <h1>{task.taskName}</h1>
            <button onClick={()=> deleteTodo(task.id)}>X</button>
           </div> 
          )
        
        })}
        
        </div>
    </div>
  )
}

export default Todolist;