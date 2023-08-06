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

 const deleteTodo = (todo)=>{
      const nnewTodo =  todoList.filter((mytodo)=>{
            if(todo === mytodo){
              return false;
            }else{
              return true;
            }
          }) ;
 }
  return (
    <div className='todo'>
         <input onChange={handleChange} value ={newTodo}/>
        <button onClick={handleToDo}>Add Task</button>
      <div className='tasks'>
        {todoList.map((mytodo,key)=>{
          return( 
            <div>
            <h1>{mytodo}</h1>
            <button onClick={deleteTodo}>X</button>
           </div> 
          )
        
        })}
        
        </div>
    </div>
  )
}

export default Todolist;