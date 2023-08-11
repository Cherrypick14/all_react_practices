import React,{useState} from 'react'
import Task from './task';

const Todolist = () => {

  const[todoList, setTodoList] = useState([]);
  const[newTodo, setNewTodo]= useState("");

  const handleChange = (event) =>{
    setNewTodo( event.target.value);
  
    
  }

 const addTask = () =>{

   // determine the next id based on the last item in the todolist

   const nextId = todoList.length === 0 ? 1 : todoList[todoList.length - 1 ].id + 1 ;

   const task = {
    id : nextId,
    taskName: newTodo,
    completed: false
  };
    setTodoList([...todoList, task])
     
 };

 const handleToDo = () =>{
  const newList = [...todoList, newTodo]
  setTodoList(newList)
  setNewTodo("");
};

    const deleteTodo = (id) => {
      const newTask =  todoList.filter((task)=> task.id !== id    
          ) 
          setTodoList(newTask);
 }

  const completeTask = (id) => {
     setTodoList(
        todoList.map((task)=>{
         if(task.id === id){
            return {...task, completed : true}
         }else{
            return task
         }
        })
     )
  }
  return (
    <div className='todo'>
         <input onChange={handleChange} value={newTodo} />
        <button onClick={handleToDo}>Add Task</button>

      <div className='task'>
        {todoList.map((task,key)=>{
          return( 
              <Task 
              taskName={task.taskName} 
              id ={task.id} 
              completed = {task.completed}
              deleteTodo={deleteTodo} 
              completeTask={completeTask} />
            
          )
        
        })}
        
        </div>
    </div>
  )
}                      

export default Todolist;