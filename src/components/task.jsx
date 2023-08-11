import React from 'react'

const Task = ({taskName, id,completed,deleteTodo,completeTask}) => {
    return (
      <div className='task'
      style={{backgroundColor: {completed} ? "green" : "white"}}>
            <h1>{taskName}</h1>
            <button onClick={()=> completeTask(id)}>Finish Task</button>
            <button onClick={()=> deleteTodo(id)}>X</button>
            
     </div> 
      
    )
}
export default Task;